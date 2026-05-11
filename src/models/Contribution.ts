import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../lib/db';

class Contribution extends Model {
  public id!: number;
  public memberDbId!: number;
  public memberId!: string;
  public baseFee!: number;
  public extraContribution!: number;
  public totalFee!: number;
  public monthlyFee!: number;
  public annualFee!: number;
  public percentage!: number;
  public currency!: string;
  public hqShare!: number;
  public branchShare!: number;
  public month!: number;
  public year!: number;
  public status!: string;
  public calculatedAt!: Date;

  public toJSON() {
    const v = Object.assign({}, this.get());
    v._id = v.id;
    return v;
  }
}

Contribution.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  memberDbId: { type: DataTypes.INTEGER, allowNull: false },
  memberId: { type: DataTypes.STRING(50), allowNull: false },
  baseFee: { type: DataTypes.DECIMAL(15, 2), allowNull: false },
  extraContribution: { type: DataTypes.DECIMAL(15, 2), defaultValue: 0 },
  totalFee: { type: DataTypes.DECIMAL(15, 2), allowNull: false },
  monthlyFee: { type: DataTypes.DECIMAL(15, 2), allowNull: false },
  annualFee: { type: DataTypes.DECIMAL(15, 2), allowNull: false },
  percentage: { type: DataTypes.DECIMAL(10, 4), defaultValue: 0 },
  currency: { type: DataTypes.ENUM('ETB', 'USD'), defaultValue: 'ETB' },
  hqShare: { type: DataTypes.DECIMAL(15, 2), allowNull: false },
  branchShare: { type: DataTypes.DECIMAL(15, 2), allowNull: false },
  month: { type: DataTypes.INTEGER, allowNull: false },
  year: { type: DataTypes.INTEGER, allowNull: false },
  status: {
    type: DataTypes.ENUM('Pending', 'Paid', 'Partial', 'Overpaid'),
    defaultValue: 'Pending'
  },
  calculatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  sequelize,
  tableName: 'contributions',
  timestamps: true,
  indexes: [
    { fields: ['memberId', 'month', 'year'] },
    { fields: ['status'] }
  ]
});

export default Contribution;
