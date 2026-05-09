// routes/reportRoutes.js - Report Routes
const express = require('express');
const router = express.Router();
const {
  monthlyRevenue,
  yearlyRevenue,
  hqBranchDistribution,
  defaulterReport,
  exportAllData
} = require('../controllers/reportController');
const { auth, authorize, scopeSector } = require('../middleware/auth');

router.use(auth);
router.use(scopeSector);
router.use(authorize('admin', 'sector_officer', 'expert'));

router.get('/monthly-revenue', monthlyRevenue);
router.get('/yearly-revenue', yearlyRevenue);
router.get('/hq-branch', hqBranchDistribution);
router.get('/defaulters', defaulterReport);
router.get('/export', exportAllData);

module.exports = router;
