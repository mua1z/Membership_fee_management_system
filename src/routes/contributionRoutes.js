// routes/contributionRoutes.js - Contribution Routes (MySQL / Sequelize)
const express = require('express');
const router  = express.Router();
const { Op }  = require('sequelize');
const Contribution = require('../models/Contribution');
const { auth, authorize } = require('../middleware/auth');

router.use(auth);

// Get all contributions
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 50, memberId, status } = req.query;
    const where = {};
    if (memberId) where.memberId = memberId;
    if (status)   where.status   = status;

    const offset = (Number(page) - 1) * Number(limit);
    const { count: total, rows: contributions } = await Contribution.findAndCountAll({
      where,
      offset,
      limit: Number(limit),
      order: [['year', 'DESC'], ['month', 'DESC']]
    });

    res.json({
      success: true,
      data: contributions,
      pagination: { total, page: Number(page), limit: Number(limit), pages: Math.ceil(total / Number(limit)) }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Create contribution
router.post('/', authorize('admin', 'operator'), async (req, res) => {
  try {
    const contribution = await Contribution.create(req.body);
    res.status(201).json({ success: true, data: contribution });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
