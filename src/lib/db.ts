import { Sequelize } from 'sequelize';

const dbUrl = process.env.MYSQL_URL || process.env.DATABASE_URL;

const sequelize = dbUrl 
  ? new Sequelize(dbUrl, {
      dialect: 'mysql',
      logging: false,
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
        pool: { max: 10, min: 0, acquire: 30000, idle: 10000 },
        define: { charset: 'utf8mb4', collate: 'utf8mb4_unicode_ci' }
      }
    );

// Import models
import User from '../models/User';
import Member from '../models/Member';
import Contribution from '../models/Contribution';
import Payment from '../models/Payment';
import Receipt from '../models/Receipt';
import Setting from '../models/Setting';
import SectorType from '../models/SectorType';
import SectorUnit from '../models/SectorUnit';
import MemberCategory from '../models/MemberCategory';
import SectorUnitCategory from '../models/SectorUnitCategory';

// Define Associations
const initModels = () => {
  // Payment ↔ Member
  Payment.belongsTo(Member, { foreignKey: 'memberDbId', as: 'memberInfo', onDelete: 'CASCADE' });
  Member.hasMany(Payment,   { foreignKey: 'memberDbId', as: 'payments',   onDelete: 'CASCADE' });

  // Receipt ↔ Member
  Receipt.belongsTo(Member,  { foreignKey: 'memberDbId',  as: 'memberInfo', onDelete: 'CASCADE'  });
  Member.hasMany(Receipt,    { foreignKey: 'memberDbId',  as: 'receipts',    onDelete: 'CASCADE'  });

  // Receipt ↔ Payment
  Receipt.belongsTo(Payment, { foreignKey: 'paymentDbId', as: 'paymentInfo', onDelete: 'CASCADE' });
  Payment.hasMany(Receipt,   { foreignKey: 'paymentDbId', as: 'receipts',    onDelete: 'CASCADE'    });

  // Contribution ↔ Member
  Contribution.belongsTo(Member, { foreignKey: 'memberDbId', as: 'memberInfo', onDelete: 'CASCADE' });
  Member.hasMany(Contribution,   { foreignKey: 'memberDbId', as: 'contributions', onDelete: 'CASCADE' });

  // Sector Associations
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
};

initModels();

export { sequelize };
export default sequelize;
