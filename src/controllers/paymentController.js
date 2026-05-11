// controllers/paymentController.js - Payment Controller (MySQL / Sequelize)
const Payment  = require('../models/Payment');
const Receipt  = require('../models/Receipt');
const Member   = require('../models/Member');
const Contribution = require('../models/Contribution');

// ─── Record a new payment ─────────────────────────────────────────────────────
exports.createPayment = async (req, res) => {
  try {
    const paymentData = req.body;

    // Verify member exists (accept both integer id and memberId string)
    const memberWhere = isNaN(paymentData.member)
      ? { memberId: paymentData.member }
      : { id: Number(paymentData.member) };
    const member = await Member.findOne({ where: memberWhere });

    if (!member) {
      return res.status(404).json({ success: false, message: 'Member not found.' });
    }

    const receiptId = `RCP-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const payment = await Payment.create({
      receiptId,
      memberDbId:       member.id,
      memberId:         member.memberId,
      contributionDbId: paymentData.contribution || null,
      amount:           paymentData.amount,
      currency:         paymentData.currency || 'ETB',
      frequency:        paymentData.frequency || 'Monthly',
      method:           paymentData.method,
      paymentDate:      paymentData.paymentDate || new Date(),
      periodMonth:      paymentData.period?.month || paymentData.periodMonth,
      periodYear:       paymentData.period?.year  || paymentData.periodYear,
      receivedBy:       paymentData.receivedBy,
      status:           paymentData.status || 'Paid',
      notes:            paymentData.notes || null
    });

    // Generate receipt
    const receipt = await Receipt.create({
      receiptId,
      paymentDbId:   payment.id,
      memberDbId:    member.id,
      memberId:      member.memberId,
      memberName:    member.fullName,
      amount:        payment.amount,
      currency:      payment.currency,
      periodMonth:   payment.periodMonth,
      periodYear:    payment.periodYear,
      paymentMethod: payment.method,
      issuedBy:      payment.receivedBy,
      branch:        member.branch
    });

    res.status(201).json({
      success: true,
      message: 'Payment recorded and receipt generated',
      data: { payment, receipt }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ─── Get all payments ─────────────────────────────────────────────────────────
exports.getPayments = async (req, res) => {
  try {
    const { page = 1, limit = 50, memberId, status, branch, cluster, sector, membershipType, sectorId, categoryId } = req.query;
    const { Op } = require('sequelize');
    const where = {};
    if (memberId) where.memberId = memberId;
    if (status)   where.status   = status;
    
    // Build member-level where for join filtering
    const memberWhere = {};
    if (branch)        memberWhere.branch        = branch;
    if (cluster)       memberWhere.cluster       = cluster;
    if (sector)        memberWhere.sector        = sector;
    if (membershipType)memberWhere.membershipType = membershipType;
    // Hierarchy filters
    if (sectorId) {
      memberWhere.sectorUnitId = sectorId;
    } else if (req.query.sectorType) {
      const sectorTypeRec = await require('../models/SectorType').findOne({ where: { name: req.query.sectorType } });
      if (sectorTypeRec) {
        const units = await require('../models/SectorUnit').findAll({ where: { sectorTypeId: sectorTypeRec.id }, attributes: ['id'] });
        memberWhere.sectorUnitId = { [Op.in]: units.map(u => u.id) };
      }
    }
    if (categoryId) memberWhere.memberCategoryId = categoryId;

    const offset = (Number(page) - 1) * Number(limit);
    const { count: total, rows: payments } = await Payment.findAndCountAll({
      where,
      include: [{
        model: Member,
        as:    'memberInfo',
        where: Object.keys(memberWhere).length > 0 ? memberWhere : undefined,
        include: [
          {
            model: require('../models/SectorUnit'),
            as: 'sectorUnit',
            attributes: ['name']
          },
          {
            model: require('../models/MemberCategory'),
            as: 'memberCategory',
            attributes: ['name']
          }
        ]
      }],
      offset,
      limit: Number(limit),
      order: [['paymentDate', 'DESC']]
    });

    const memberFilter = Object.keys(memberWhere).length > 0 ? memberWhere : undefined;
    const totalMemberCount = await Member.count({ where: memberFilter });
    const totalMonthlyRevenue = await Member.sum('contributionMonthlyFee', { where: memberFilter });
    const totalYearlyRevenue = await Member.sum('contributionAnnualFee', { where: memberFilter });

    res.json({
      success: true,
      data: payments,
      summary: {
        totalMembers: totalMemberCount,
        totalMonthlyRevenue: totalMonthlyRevenue || 0,
        totalYearlyRevenue: totalYearlyRevenue || 0
      },
      pagination: { total, page: Number(page), limit: Number(limit), pages: Math.ceil(total / Number(limit)) }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ─── Get single payment ───────────────────────────────────────────────────────
exports.getPayment = async (req, res) => {
  try {
    const payment = await Payment.findByPk(req.params.id, {
      include: [{ model: Member, as: 'memberInfo', attributes: ['fullName', 'memberId', 'branch'] }]
    });
    if (!payment) return res.status(404).json({ success: false, message: 'Payment not found.' });
    res.json({ success: true, data: payment });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ─── Get payments by member ───────────────────────────────────────────────────
exports.getPaymentsByMember = async (req, res) => {
  try {
    const payments = await Payment.findAll({
      where: { memberId: req.params.memberId },
      order: [['paymentDate', 'DESC']]
    });
    res.json({ success: true, data: payments });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ─── Bulk payments ────────────────────────────────────────────────────────────
exports.bulkPayments = async (req, res) => {
  try {
    const payments = req.body;
    if (!Array.isArray(payments) || payments.length === 0) {
      return res.status(400).json({ success: false, message: 'Please provide an array of payments.' });
    }

    const createdPayments = [];
    const errors = [];

    for (let i = 0; i < payments.length; i++) {
      try {
        const paymentData = payments[i];
        const memberWhere = isNaN(paymentData.member)
          ? { memberId: paymentData.member }
          : { id: Number(paymentData.member) };
        const member = await Member.findOne({ where: memberWhere });

        if (!member) {
          errors.push({ index: i, error: 'Member not found' });
          continue;
        }

        const receiptId = `RCP-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`;

        const payment = await Payment.create({
          receiptId,
          memberDbId:  member.id,
          memberId:    member.memberId,
          amount:      paymentData.amount,
          currency:    paymentData.currency || 'ETB',
          frequency:   paymentData.frequency || 'Monthly',
          method:      paymentData.method,
          paymentDate: paymentData.paymentDate || new Date(),
          periodMonth: paymentData.period?.month || paymentData.periodMonth,
          periodYear:  paymentData.period?.year  || paymentData.periodYear,
          receivedBy:  paymentData.receivedBy,
          status:      paymentData.status || 'Paid',
          notes:       paymentData.notes || null
        });

        await Receipt.create({
          receiptId,
          paymentDbId:   payment.id,
          memberDbId:    member.id,
          memberId:      member.memberId,
          memberName:    member.fullName,
          amount:        payment.amount,
          currency:      payment.currency,
          periodMonth:   payment.periodMonth,
          periodYear:    payment.periodYear,
          paymentMethod: payment.method,
          issuedBy:      payment.receivedBy,
          branch:        member.branch
        });

        createdPayments.push(payment);
      } catch (err) {
        errors.push({ index: i, error: err.message });
      }
    }

    res.status(201).json({
      success: true,
      message: `Processed ${createdPayments.length} payments`,
      data: createdPayments,
      errors: errors.length > 0 ? errors : undefined
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ─── Get monthly payment status for all members ────────────────────────────────
exports.getMonthlyStatus = async (req, res) => {
  try {
    const { month, year, search, branch, cluster, sector, membershipType, paymentStatus, page = 1, limit = 50 } = req.query;
    
    const targetMonth = month ? Number(month) : new Date().getMonth() + 1;
    const targetYear  = year  ? Number(year)  : new Date().getFullYear();

    const { Op } = require('sequelize');
    const { sequelize } = require('../config/db');
    const memberWhere = {};
    if (search) {
      memberWhere[Op.or] = [
        { fullName: { [Op.like]: `%${search}%` } },
        { memberId: { [Op.like]: `%${search}%` } }
      ];
    }
    if (branch)        memberWhere.branch        = branch;
    if (cluster)       memberWhere.cluster       = cluster;
    if (sector)        memberWhere.sector        = sector;
    if (membershipType)memberWhere.membershipType = membershipType;
    // Hierarchy filters
    if (req.query.sectorId) {
      memberWhere.sectorUnitId = req.query.sectorId;
    } else if (req.query.sectorType) {
      const sectorTypeRec = await require('../models/SectorType').findOne({ where: { name: req.query.sectorType } });
      if (sectorTypeRec) {
        const units = await require('../models/SectorUnit').findAll({ where: { sectorTypeId: sectorTypeRec.id }, attributes: ['id'] });
        memberWhere.sectorUnitId = { [Op.in]: units.map(u => u.id) };
      }
    }
    if (req.query.categoryId) memberWhere.memberCategoryId = req.query.categoryId;

    // Dynamic Filter for paymentStatus using targetYear/targetMonth
    if (paymentStatus === 'Paid') {
      memberWhere.id = { [Op.in]: sequelize.literal(`(SELECT memberDbId FROM payments WHERE periodMonth = ${targetMonth} AND periodYear = ${targetYear} AND status = 'Paid')`) };
    } else if (paymentStatus === 'Unpaid') {
      memberWhere.id = { [Op.notIn]: sequelize.literal(`(SELECT memberDbId FROM payments WHERE periodMonth = ${targetMonth} AND periodYear = ${targetYear} AND status = 'Paid')`) };
    }

    const offset = (Number(page) - 1) * Number(limit);

    const { count: total, rows: members } = await Member.findAndCountAll({
      where: memberWhere,
      include: [
        {
          model: Payment,
          as: 'payments',
          where: { periodMonth: targetMonth, periodYear: targetYear, status: 'Paid' },
          required: false // Left outer join
        },
        {
          model: require('../models/SectorUnit'),
          as: 'sectorUnit',
          attributes: ['name']
        },
        {
          model: require('../models/MemberCategory'),
          as: 'memberCategory',
          attributes: ['name']
        }
      ],
      offset,
      limit: Number(limit),
      order: [['fullName', 'ASC']]
    });

    // Map members to include a simplified payment status for the UI
    const mappedMembers = members.map(m => {
      const obj = m.toJSON();
      const currentPayment = (obj.payments && obj.payments.length > 0) ? obj.payments[0] : null;

      return {
        _id: obj.id,
        memberId: obj.memberId,
        fullName: obj.fullName,
        branch: obj.sectorUnit?.name || obj.sector || obj.branch,
        fee: obj.contribution?.monthlyFee || obj.contributionMonthlyFee || 0,
        paymentStatus: currentPayment ? 'Paid' : 'Unpaid',
        paymentDate: currentPayment ? currentPayment.paymentDate : null,
        paymentId: currentPayment ? currentPayment.id : null
      };
    });

    const totalMonthlyRevenue = await Member.sum('contributionMonthlyFee', { where: memberWhere });
    const totalYearlyRevenue = await Member.sum('contributionAnnualFee', { where: memberWhere });

    res.json({
      success: true,
      data: mappedMembers,
      summary: {
        totalMembers: total,
        totalMonthlyRevenue: totalMonthlyRevenue || 0,
        totalYearlyRevenue: totalYearlyRevenue || 0
      },
      pagination: { total, page: Number(page), limit: Number(limit), pages: Math.ceil(total / Number(limit)) },
      period: { month: targetMonth, year: targetYear }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ─── Update Payment ──────────────────────────────────────────────────────────
exports.updatePayment = async (req, res) => {
  try {
    const payment = await Payment.findByPk(req.params.id);
    if (!payment) return res.status(404).json({ success: false, message: 'Payment not found.' });

    const member = await Member.findByPk(payment.memberDbId);
    if (req.user?.role === 'sector_officer' && req.user.sectorUnitId) {
      if (member && member.sectorUnitId !== req.user.sectorUnitId) {
        return res.status(403).json({ success: false, message: 'Access denied: You can only edit payments for your assigned sector unit.' });
      }
    }

    await payment.update(req.body);
    res.json({ success: true, message: 'Payment updated successfully', data: payment });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ─── Delete Payment ──────────────────────────────────────────────────────────
exports.deletePayment = async (req, res) => {
  try {
    const payment = await Payment.findByPk(req.params.id);
    if (!payment) return res.status(404).json({ success: false, message: 'Payment not found.' });

    const member = await Member.findByPk(payment.memberDbId);
    if (req.user?.role === 'sector_officer' && req.user.sectorUnitId) {
      if (member && member.sectorUnitId !== req.user.sectorUnitId) {
        return res.status(403).json({ success: false, message: 'Access denied: You can only delete payments for your assigned sector unit.' });
      }
    }

    // Also delete the receipt if it exists
    await Receipt.destroy({ where: { paymentDbId: payment.id } });
    await payment.destroy();
    
    res.json({ success: true, message: 'Payment deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
