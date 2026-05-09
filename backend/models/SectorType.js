// models/SectorType.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const SectorType = sequelize.define('SectorType', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(100), allowNull: false, unique: true }
}, {
  tableName: 'sector_types',
  timestamps: false
});

module.exports = SectorType;
