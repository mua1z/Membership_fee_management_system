// routes/userRoutes.js - User Management Routes
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { auth, authorize } = require('../middleware/auth');
const {
  getAllUsers, getUserById, createUser, adminUpdateUser, deleteUser, adminResetPassword,
  getMyProfile, updateMyProfile, changeMyPassword, uploadProfilePic
} = require('../controllers/userController');

// ── Multer setup for profile pictures ─────────────────────────────────────────
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, '../uploads');
    const fs = require('fs');
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `avatar-${req.userId}-${Date.now()}${path.extname(file.originalname)}`);
  }
});
const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB
  fileFilter: (req, file, cb) => {
    const allowed = /jpeg|jpg|png|gif|webp/;
    if (allowed.test(path.extname(file.originalname).toLowerCase()) && allowed.test(file.mimetype)) {
      return cb(null, true);
    }
    cb(new Error('Only image files are allowed.'));
  }
});

// All routes require authentication
router.use(auth);

// ── Self-service profile routes (all authenticated users) ─────────────────────
router.get('/me', getMyProfile);
router.put('/me', updateMyProfile);
router.put('/me/password', changeMyPassword);
router.post('/me/avatar', upload.single('avatar'), uploadProfilePic);

// ── Admin-only user management routes ────────────────────────────────────────
router.get('/', authorize('admin'), getAllUsers);
router.post('/', authorize('admin'), createUser);
router.get('/:id', authorize('admin'), getUserById);
router.put('/:id', authorize('admin'), adminUpdateUser);
router.delete('/:id', authorize('admin'), deleteUser);
router.put('/:id/reset-password', authorize('admin'), adminResetPassword);

module.exports = router;
