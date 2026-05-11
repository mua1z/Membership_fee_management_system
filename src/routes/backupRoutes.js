// routes/backupRoutes.js - Backup Routes
const express = require('express');
const router = express.Router();
const {
  createBackup,
  exportToJSON,
  listBackups,
  deleteBackup,
  cleanOldBackups
} = require('../controllers/backupController');
const { auth, authorize } = require('../middleware/auth');

router.use(auth);

router.post('/create', authorize('admin'), createBackup);
router.post('/export-json', exportToJSON);
router.get('/list', authorize('admin'), listBackups);
router.delete('/delete', authorize('admin'), deleteBackup);
router.post('/clean', authorize('admin'), cleanOldBackups);

module.exports = router;
