// routes/settingRoutes.js - Settings Routes
const express = require('express');
const router = express.Router();
const {
  getSettings,
  updateSettings,
  recalculateAll,
  addBranch,
  updateBranch,
  deleteBranch
} = require('../controllers/settingController');
const { auth, authorize } = require('../middleware/auth');

router.use(auth);

router.get('/', getSettings);
router.put('/', authorize('admin'), updateSettings);
router.post('/recalculate', authorize('admin'), recalculateAll);

// Branch management
router.post('/branches', authorize('admin'), addBranch);
router.put('/branches/:branchId', authorize('admin'), updateBranch);
router.delete('/branches/:branchId', authorize('admin'), deleteBranch);

module.exports = router;
