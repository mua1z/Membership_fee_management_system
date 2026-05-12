// config/db.js - MySQL / Sequelize Configuration (supports TiDB Cloud)
const { Sequelize } = require('sequelize');

const dbUrl = process.env.MYSQL_URL || process.env.DATABASE_URL;

// Enable SSL when DB_SSL=true or NODE_ENV=production (required for TiDB Cloud)
const useSSL = process.env.DB_SSL === 'true' || process.env.NODE_ENV === 'production';
const dialectOptions = useSSL ? {
  ssl: {
    require: true,
    rejectUnauthorized: true
  }
} : {};

const sequelize = dbUrl 
  ? new Sequelize(dbUrl, {
      dialect: 'mysql',
      logging: false,
      dialectOptions,
      pool: { max: 10, min: 0, acquire: 30000, idle: 10000 },
      define: { charset: 'utf8mb4', collate: 'utf8mb4_unicode_ci' }
    })
  : new Sequelize(
      process.env.DB_NAME || 'mcms',
      process.env.DB_USER || 'root',
      process.env.DB_PASSWORD || '',
      {
        host: process.env.DB_HOST || 'localhost',
        port: Number(process.env.DB_PORT) || 3306,
        dialect: 'mysql',
        logging: false,
        dialectOptions,
        pool: { max: 10, min: 0, acquire: 30000, idle: 10000 },
        define: { charset: 'utf8mb4', collate: 'utf8mb4_unicode_ci' }
      }
    );

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ MySQL Connected Successfully');

    // Import all models (ensures they register before sync)
    require('../models/User');
    const SectorType = require('../models/SectorType');
    const SectorUnit = require('../models/SectorUnit');
    const MemberCategory = require('../models/MemberCategory');
    const SectorUnitCategory = require('../models/SectorUnitCategory');
    require('../models/Member');
    require('../models/Contribution');
    require('../models/Payment');
    require('../models/Receipt');
    require('../models/Setting');

    // Define Sector Associations
    SectorType.hasMany(SectorUnit, { foreignKey: 'sectorTypeId', as: 'units' });
    SectorUnit.belongsTo(SectorType, { foreignKey: 'sectorTypeId', as: 'sectorType' });

    SectorUnit.belongsToMany(MemberCategory, {
      through: SectorUnitCategory,
      foreignKey: 'sectorUnitId',
      otherKey: 'memberCategoryId',
      as: 'categories'
    });

    MemberCategory.belongsToMany(SectorUnit, {
      through: SectorUnitCategory,
      foreignKey: 'memberCategoryId',
      otherKey: 'sectorUnitId',
      as: 'units'
    });

    // Sync tables (default)
    await sequelize.sync();
    console.log('✅ Database tables synchronized');
  } catch (error) {
    console.error('❌ MySQL Connection Error:', error.message);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
