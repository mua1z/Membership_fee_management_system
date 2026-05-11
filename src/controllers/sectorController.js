// controllers/sectorController.js
const SectorType = require('../models/SectorType');
const SectorUnit = require('../models/SectorUnit');
const MemberCategory = require('../models/MemberCategory');
const SectorUnitCategory = require('../models/SectorUnitCategory');

// GET /api/sectors?type={type}  — returns units filtered by type (or all if no type)
exports.getSectorUnits = async (req, res) => {
  try {
    const { type } = req.query;

    // If a type filter is given, find that specific type first
    if (type) {
      const sectorType = await SectorType.findOne({ where: { name: type } });
      if (!sectorType) return res.json([]);
      const units = await SectorUnit.findAll({
        where: { sectorTypeId: sectorType.id },
        order: [['name', 'ASC']]
      });
      // Attach typeName so frontend can detect it
      return res.json(units.map(u => ({ ...u.toJSON(), sectorTypeName: sectorType.name })));
    }

    // No filter — return all units with their type name included
    const units = await SectorUnit.findAll({
      include: [{ model: SectorType, as: 'sectorType', attributes: ['id', 'name'] }],
      order: [['name', 'ASC']]
    });
    res.json(units.map(u => ({
      ...u.toJSON(),
      sectorTypeName: u.sectorType?.name || ''
    })));
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET /api/sectors/:id/categories
exports.getSectorCategories = async (req, res) => {
  try {
    const { id } = req.params;
    const unit = await SectorUnit.findByPk(id);
    if (!unit) return res.status(404).json({ success: false, message: 'Sector unit not found' });

    const categories = await SectorUnit.findByPk(id, {
      include: [{
        model: MemberCategory,
        as: 'categories',
        through: { attributes: [] } // Omit pivot table attributes
      }]
    });

    res.json(categories.categories || []);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET /api/sector-types
exports.getSectorTypes = async (req, res) => {
  try {
    const types = await SectorType.findAll();
    res.json(types);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
// GET /api/member-categories
exports.getMemberCategories = async (req, res) => {
  try {
    const categories = await MemberCategory.findAll({ order: [['name', 'ASC']] });
    res.json(categories);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
