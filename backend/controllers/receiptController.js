// controllers/receiptController.js - Receipt Controller (MySQL / Sequelize)
const Receipt  = require('../models/Receipt');
const Payment  = require('../models/Payment');
const Member   = require('../models/Member');
const Setting  = require('../models/Setting');
const ReceiptPDF = require('../utils/receiptPDF');

// Get all receipts
exports.getReceipts = async (req, res) => {
  try {
    const { page = 1, limit = 50, memberId, status } = req.query;
    const where = {};
    if (memberId) where.memberId = memberId;
    if (status)   where.status   = status;

    const offset = (Number(page) - 1) * Number(limit);
    const { count: total, rows: receipts } = await Receipt.findAndCountAll({
      where,
      include: [
        { model: Member,  as: 'memberInfo',  attributes: ['fullName', 'memberId', 'branch'] },
        { model: Payment, as: 'paymentInfo' }
      ],
      offset,
      limit: Number(limit),
      order: [['issuedAt', 'DESC']]
    });

    res.json({
      success: true,
      data: receipts,
      pagination: { total, page: Number(page), limit: Number(limit), pages: Math.ceil(total / Number(limit)) }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get single receipt
exports.getReceipt = async (req, res) => {
  try {
    const receipt = await Receipt.findByPk(req.params.id, {
      include: [
        { model: Member,  as: 'memberInfo' },
        { model: Payment, as: 'paymentInfo' }
      ]
    });
    if (!receipt) return res.status(404).json({ success: false, message: 'Receipt not found.' });
    res.json({ success: true, data: receipt });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get receipt by receiptId string
exports.getReceiptByReceiptId = async (req, res) => {
  try {
    const receipt = await Receipt.findOne({
      where: { receiptId: req.params.receiptId },
      include: [
        { model: Member,  as: 'memberInfo' },
        { model: Payment, as: 'paymentInfo' }
      ]
    });
    if (!receipt) return res.status(404).json({ success: false, message: 'Receipt not found.' });
    res.json({ success: true, data: receipt });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Void receipt
exports.voidReceipt = async (req, res) => {
  try {
    const [updated] = await Receipt.update({ status: 'Voided' }, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ success: false, message: 'Receipt not found.' });

    const receipt = await Receipt.findByPk(req.params.id);
    res.json({ success: true, message: 'Receipt voided successfully', data: receipt });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Generate / download receipt PDF
const _generatePDF = async (req, res) => {
  try {
    const receipt = await Receipt.findByPk(req.params.id, {
      include: [
        { model: Member,  as: 'memberInfo' },
        { model: Payment, as: 'paymentInfo' }
      ]
    });
    if (!receipt) return res.status(404).json({ success: false, message: 'Receipt not found.' });

    const settings = await Setting.findOne();

    // Build objects compatible with ReceiptPDF (uses member.fullName, payment.method etc.)
    const receiptObj = receipt.toJSON();
    const memberObj  = receiptObj.memberInfo || receiptObj.member;
    const paymentObj = receiptObj.paymentInfo || receiptObj.payment;

    const pdfBuffer = await ReceiptPDF.generatePDFBuffer(receiptObj, paymentObj, memberObj, settings);

    res.set({
      'Content-Type':        'application/pdf',
      'Content-Disposition': `attachment; filename="${receipt.receiptId}.pdf"`,
      'Content-Length':       pdfBuffer.length
    });
    res.send(pdfBuffer);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.generateReceiptPDF  = _generatePDF;
exports.downloadReceiptPDF  = _generatePDF;
