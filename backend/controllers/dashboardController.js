// controllers/dashboardController.js - Dashboard Controller (MySQL / Sequelize)
const Member  = require('../models/Member');
const Payment = require('../models/Payment');
const Receipt = require('../models/Receipt');
const { getEthiopianYear, getEthiopianMonth } = require('../utils/ethiopianCalendar');

exports.getDashboardStats = async (req, res) => {
  try {
    const { sequelize } = require('../config/db');
    const Q = sequelize.QueryTypes.SELECT;

    const currentYear  = getEthiopianYear();
    const currentMonth = getEthiopianMonth();

    // ── Sector scoping ─────────────────────────────────────────────────────────
    // scopeSector middleware injects req.query.sectorId for sector_officer role
    const sectorId = req.query.sectorId;
    const esc      = sectorId ? sequelize.escape(sectorId) : null;

    // For queries on 'members' table directly (no alias)
    const memberWhere  = sectorId ? ` AND sectorUnitId = ${esc} ` : '';
    // For queries where members is aliased as 'm'
    const mWhere       = sectorId ? ` AND m.sectorUnitId = ${esc} ` : '';
    // For queries where payments is unaliased — scope via subquery
    const payWhere     = sectorId
      ? ` AND memberDbId IN (SELECT id FROM members WHERE sectorUnitId = ${esc}) `
      : '';
    // For queries where payments is aliased as 'p'
    const pWhere       = sectorId
      ? ` AND p.memberDbId IN (SELECT id FROM members WHERE sectorUnitId = ${esc}) `
      : '';

    // ── Counts ─────────────────────────────────────────────────────────────────
    const [totalRow] = await sequelize.query(
      `SELECT COUNT(*) AS cnt FROM members WHERE 1=1 ${memberWhere}`, { type: Q }
    );
    const totalMembers = Number(totalRow?.cnt) || 0;

    const [activeRow] = await sequelize.query(
      `SELECT COUNT(*) AS cnt FROM members WHERE status = 'Active' ${memberWhere}`, { type: Q }
    );
    const activeMembers = Number(activeRow?.cnt) || 0;

    // payments table has no alias here
    const [paidThisMonthRaw] = await sequelize.query(
      `SELECT COUNT(DISTINCT memberDbId) AS count FROM payments
       WHERE periodYear = ? AND periodMonth = ? ${payWhere}`,
      { replacements: [currentYear, currentMonth], type: Q }
    );
    const paidThisMonth   = Number(paidThisMonthRaw?.count) || 0;
    const pendingPayments = totalMembers - paidThisMonth;

    const [defaulterRaw] = await sequelize.query(`
      SELECT COUNT(*) AS count 
      FROM members m
      LEFT JOIN payments p
        ON m.id = p.memberDbId AND p.periodMonth = ? AND p.periodYear = ? AND p.status = 'Paid'
      WHERE p.id IS NULL AND m.status = 'Active' ${mWhere}
    `, { replacements: [currentMonth, currentYear], type: Q });
    const defaultedMembers = Number(defaulterRaw?.count) || 0;

    // ── Revenue ────────────────────────────────────────────────────────────────
    const [yearlyRow] = await sequelize.query(
      `SELECT COALESCE(SUM(amount),0) AS total FROM payments WHERE periodYear = ? ${payWhere}`,
      { replacements: [currentYear], type: Q }
    );
    const [monthlyRow] = await sequelize.query(
      `SELECT COALESCE(SUM(amount),0) AS total FROM payments
       WHERE periodYear = ? AND periodMonth = ? ${payWhere}`,
      { replacements: [currentYear, currentMonth], type: Q }
    );

    // ── Members by type ────────────────────────────────────────────────────────
    const membersByType = await sequelize.query(
      `SELECT membershipType AS _id, COUNT(*) AS count
       FROM members WHERE 1=1 ${memberWhere}
       GROUP BY membershipType`,
      { type: Q }
    );

    // ── Members by Sector Unit ────────────────────────────────────────────────
    const membersByBranch = await sequelize.query(
      `SELECT su.name AS _id, COUNT(*) AS count 
       FROM members m
       LEFT JOIN sector_units su ON m.sectorUnitId = su.id
       WHERE 1=1 ${mWhere}
       GROUP BY su.name`,
      { type: Q }
    );

    // ── Members by Sector Type ────────────────────────────────────────────────
    const membersByCluster = await sequelize.query(
      `SELECT st.name AS _id, COUNT(*) AS count 
       FROM members m
       LEFT JOIN sector_units su ON m.sectorUnitId = su.id
       LEFT JOIN sector_types st ON su.sectorTypeId = st.id
       WHERE 1=1 ${mWhere}
       GROUP BY st.name`,
      { type: Q }
    );

    // ── Members by Sector (ranked) ────────────────────────────────────────────
    const membersBySector = await sequelize.query(
      `SELECT su.name AS _id, COUNT(*) AS count 
       FROM members m
       LEFT JOIN sector_units su ON m.sectorUnitId = su.id
       WHERE m.sectorUnitId IS NOT NULL ${mWhere}
       GROUP BY su.name ORDER BY count DESC`,
      { type: Q }
    );

    // ── Payment trend (last 12 months) ─────────────────────────────────────────
    const paymentTrend = await sequelize.query(
      `SELECT YEAR(paymentDate) AS year, MONTH(paymentDate) AS month,
              SUM(amount) AS revenue, COUNT(*) AS count
       FROM payments
       WHERE paymentDate >= DATE_SUB(NOW(), INTERVAL 12 MONTH) ${payWhere}
       GROUP BY YEAR(paymentDate), MONTH(paymentDate)
       ORDER BY year ASC, month ASC`,
      { type: Q }
    );

    // ── Top contributors ──────────────────────────────────────────────────────
    const topContributorsRaw = await Member.findAll({
      attributes: ['fullName', 'memberId', 'contributionMonthlyFee', 'branch', 'sector'],
      where: sectorId ? { sectorUnitId: sectorId } : {},
      include: [{ model: require('../models/SectorUnit'), as: 'sectorUnit' }],
      order: [['contributionMonthlyFee', 'DESC']],
      limit: 10
    });
    const topContributors = topContributorsRaw.map(m => ({
      fullName: m.fullName,
      memberId: m.memberId,
      branch:   m.sectorUnit?.name || m.sector || m.branch || '-',
      contribution: { monthlyFee: Number(m.contributionMonthlyFee) || 0 }
    }));

    // ── Revenue by member type ─────────────────────────────────────────────────
    const revenueByType = await sequelize.query(
      `SELECT m.membershipType AS _id, SUM(p.amount) AS totalRevenue
       FROM payments p
       JOIN members m ON p.memberDbId = m.id
       WHERE 1=1 ${pWhere}
       GROUP BY m.membershipType`,
      { type: Q }
    );

    // ── Members by Category (for sector officer view) ──────────────────────────
    const membersByCategory = await sequelize.query(
      `SELECT COALESCE(mc.name, m.membershipType) AS _id, COUNT(*) AS count
       FROM members m
       LEFT JOIN member_categories mc ON m.memberCategoryId = mc.id
       WHERE 1=1 ${mWhere}
       GROUP BY COALESCE(mc.name, m.membershipType)
       ORDER BY count DESC`,
      { type: Q }
    );

    res.json({
      success: true,
      data: {
        summary: {
          totalMembers,
          activeMembers,
          yearlyRevenue:   Number(yearlyRow?.total)  || 0,
          monthlyRevenue:  Number(monthlyRow?.total) || 0,
          pendingPayments,
          defaultedMembers
        },
        membersByType,
        membersByBranch,
        membersByCluster,
        membersBySector,
        membersByCategory,
        paymentTrend: paymentTrend.map(r => ({
          _id: { year: r.year, month: r.month },
          revenue: Number(r.revenue) || 0,
          count: Number(r.count) || 0
        })),
        topContributors,
        revenueByType,
        scopedToSector: !!sectorId
      }
    });
  } catch (error) {
    console.error('Dashboard error:', error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getGrowthRate = async (req, res) => {
  try {
    const { sequelize } = require('../config/db');
    const Q = sequelize.QueryTypes.SELECT;
    const currentYear = getEthiopianYear();
    const lastYear    = currentYear - 1;

    const sectorId  = req.query.sectorId;
    const memberWhere = sectorId ? ` AND sectorUnitId = ${sequelize.escape(sectorId)} ` : '';

    const [curr] = await sequelize.query(
      `SELECT COUNT(*) AS cnt FROM members WHERE YEAR(registrationDate) = ? ${memberWhere}`,
      { replacements: [currentYear], type: Q }
    );
    const [last] = await sequelize.query(
      `SELECT COUNT(*) AS cnt FROM members WHERE YEAR(registrationDate) = ? ${memberWhere}`,
      { replacements: [lastYear], type: Q }
    );

    const currentYearMembers = Number(curr?.cnt) || 0;
    const lastYearMembers    = Number(last?.cnt)  || 0;
    const growthRate = lastYearMembers > 0
      ? ((currentYearMembers - lastYearMembers) / lastYearMembers * 100).toFixed(2)
      : 0;

    res.json({
      success: true,
      data: { currentYear, currentYearMembers, lastYearMembers, growthRate: `${growthRate}%` }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
