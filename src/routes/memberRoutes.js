// routes/memberRoutes.js - Member Routes
const express = require('express');
const router = express.Router();
const {
  createMember,
  getMembers,
  getMember,
  updateMember,
  deleteMember,
  bulkDeleteMembers,
  bulkDeleteAllMembers,
  bulkCreateMembers,
  bulkAppendMembers,
  getMemberStats
} = require('../controllers/memberController');
const { auth, authorize, scopeSector } = require('../middleware/auth');

// Apply auth middleware to all routes
router.use(auth);
router.use(scopeSector);

router.post('/', authorize('admin', 'sector_officer'), createMember);
router.get('/', authorize('admin', 'sector_officer', 'expert'), getMembers);
router.get('/stats', authorize('admin', 'sector_officer', 'expert'), getMemberStats);
router.get('/:id', authorize('admin', 'sector_officer', 'expert'), getMember);
router.put('/:id', authorize('admin', 'sector_officer'), updateMember);
router.delete('/:id', authorize('admin', 'sector_officer'), deleteMember);
router.post('/bulk-delete', authorize('admin', 'sector_officer'), bulkDeleteMembers);
router.post('/bulk-delete-all', authorize('admin'), bulkDeleteAllMembers);
router.post('/bulk', authorize('admin'), bulkCreateMembers);
router.post('/bulk-append', authorize('admin', 'sector_officer'), bulkAppendMembers);

module.exports = router;
