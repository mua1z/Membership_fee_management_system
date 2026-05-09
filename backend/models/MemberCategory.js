// models/MemberCategory.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const MemberCategory = sequelize.define('MemberCategory', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(255), allowNull: false, unique: true }
}, {
  tableName: 'member_categories',
  timestamps: false
});

module.exports = MemberCategory;
