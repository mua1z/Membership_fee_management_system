// models/Contribution.js - Contribution Model (Sequelize / MySQL)
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Contribution = sequelize.define('Contribution', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

  // FK to members table + business string
  memberDbId: { type: DataTypes.INTEGER, allowNull: false },
  memberId:   { type: DataTypes.STRING(50), allowNull: false },

  // Contribution Details
  baseFee:          { type: DataTypes.DECIMAL(15, 2), allowNull: false },
  extraContribution:{ type: DataTypes.DECIMAL(15, 2), defaultValue: 0 },
  totalFee:         { type: DataTypes.DECIMAL(15, 2), allowNull: false },
  monthlyFee:       { type: DataTypes.DECIMAL(15, 2), allowNull: false },
  annualFee:        { type: DataTypes.DECIMAL(15, 2), allowNull: false },
  percentage:       { type: DataTypes.DECIMAL(10, 4), defaultValue: 0 },
  currency:         { type: DataTypes.ENUM('ETB', 'USD'), defaultValue: 'ETB' },

  // Distribution
  hqShare:     { type: DataTypes.DECIMAL(15, 2), allowNull: false },
  branchShare: { type: DataTypes.DECIMAL(15, 2), allowNull: false },

  // Period
  month: { type: DataTypes.INTEGER, allowNull: false },
  year:  { type: DataTypes.INTEGER, allowNull: false },

  status: {
    type: DataTypes.ENUM('Pending', 'Paid', 'Partial', 'Overpaid'),
    defaultValue: 'Pending'
  },
  calculatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }

}, {
  tableName: 'contributions',
  timestamps: true,
  indexes: [
    { fields: ['memberId', 'month', 'year'] },
    { fields: ['status'] }
  ]
});

Contribution.prototype.toJSON = function () {
  const v = Object.assign({}, this.get());
  v._id = v.id;
  return v;
};

module.exports = Contribution;
