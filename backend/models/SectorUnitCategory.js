// models/SectorUnitCategory.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const SectorUnitCategory = sequelize.define('SectorUnitCategory', {
  sectorUnitId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: { model: 'sector_units', key: 'id' }
  },
  memberCategoryId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: { model: 'member_categories', key: 'id' }
  }
}, {
  tableName: 'sector_unit_categories',
  timestamps: false
});

module.exports = SectorUnitCategory;
