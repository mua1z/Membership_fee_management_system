// routes/receiptRoutes.js - Receipt Routes
const express = require('express');
const router = express.Router();
const {
  getReceipts,
  getReceipt,
  getReceiptByReceiptId,
  voidReceipt,
  generateReceiptPDF,
  downloadReceiptPDF
} = require('../controllers/receiptController');
const { auth, authorize } = require('../middleware/auth');

router.use(auth);

router.get('/', getReceipts);
router.get('/:id', getReceipt);
router.get('/id/:receiptId', getReceiptByReceiptId);
router.put('/:id/void', authorize('admin'), voidReceipt);
router.get('/:id/pdf', generateReceiptPDF);
router.get('/:id/download', downloadReceiptPDF);

module.exports = router;
