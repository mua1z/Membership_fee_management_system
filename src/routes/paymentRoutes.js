// routes/paymentRoutes.js - Payment Routes
const express = require('express');
const router = express.Router();
const {
  createPayment,
  getPayments,
  getPayment,
  getPaymentsByMember,
  bulkPayments,
  getMonthlyStatus,
  updatePayment,
  deletePayment
} = require('../controllers/paymentController');
const { auth, authorize, scopeSector } = require('../middleware/auth');

router.use(auth);
router.use(scopeSector);

router.post('/', authorize('admin', 'sector_officer'), createPayment);
router.get('/', authorize('admin', 'sector_officer', 'expert'), getPayments);
router.get('/monthly-status', authorize('admin', 'sector_officer', 'expert'), getMonthlyStatus);
router.get('/:id', authorize('admin', 'sector_officer', 'expert'), getPayment);
router.put('/:id', authorize('admin', 'sector_officer'), updatePayment);
router.delete('/:id', authorize('admin', 'sector_officer'), deletePayment);
router.get('/member/:memberId', authorize('admin', 'sector_officer', 'expert'), getPaymentsByMember);
router.post('/bulk', authorize('admin', 'sector_officer'), bulkPayments);

module.exports = router;
