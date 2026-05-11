// routes/sectorRoutes.js
const express = require('express');
const router = express.Router();
const sectorController = require('../controllers/sectorController');

router.get('/sector-types', sectorController.getSectorTypes);
router.get('/sectors', sectorController.getSectorUnits);
router.get('/sectors/:id/categories', sectorController.getSectorCategories);
router.get('/member-categories', sectorController.getMemberCategories);

module.exports = router;
