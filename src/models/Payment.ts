import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../lib/db';

class Payment extends Model {
  public id!: number;
  public receiptId!: string;
  public memberDbId!: number;
  public memberId!: string;
  public contributionDbId!: number;
  public amount!: number;
  public currency!: string;
  public frequency!: string;
  public method!: string;
  public paymentDate!: Date;
  public periodMonth!: number;
  public periodYear!: number;
  public receivedBy!: string;
  public status!: string;
  public notes!: string;
  public receiptGenerated!: boolean;

  public toJSON() {
    const v = Object.assign({}, this.get());
    v._id = v.id;
    v.period = { month: v.periodMonth, year: v.periodYear };
    // Reconstruct member populate-like object if memberInfo is included (managed in controller)
    if ((this as any).memberInfo) {
      v.member = (this as any).memberInfo;
    }
    return v;
  }
}

Payment.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  receiptId: { type: DataTypes.STRING(100), unique: true, allowNull: false },
  memberDbId: { type: DataTypes.INTEGER, allowNull: false },
  memberId: { type: DataTypes.STRING(50), allowNull: false },
  contributionDbId: { type: DataTypes.INTEGER, allowNull: true },
  amount: { type: DataTypes.DECIMAL(15, 2), allowNull: false },
  currency: { type: DataTypes.ENUM('ETB', 'USD'), defaultValue: 'ETB' },
  frequency: {
    type: DataTypes.ENUM('Monthly', 'Quarterly', 'Semi-Annual', 'Annual'),
    defaultValue: 'Monthly'
  },
  method: {
    type: DataTypes.ENUM('Cash', 'Bank Transfer', 'Mobile Money', 'Check'),
    allowNull: false
  },
  paymentDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  periodMonth: { type: DataTypes.INTEGER, allowNull: false },
  periodYear: { type: DataTypes.INTEGER, allowNull: false },
  receivedBy: { type: DataTypes.STRING(255), allowNull: false },
  status: {
    type: DataTypes.ENUM('Paid', 'Partial', 'Overpaid'),
    defaultValue: 'Paid'
  },
  notes: { type: DataTypes.TEXT, allowNull: true },
  receiptGenerated: { type: DataTypes.BOOLEAN, defaultValue: true }
}, {
  sequelize,
  tableName: 'payments',
  timestamps: true,
  indexes: [
    { fields: ['receiptId'] },
    { fields: ['memberId', 'periodYear', 'periodMonth'] },
    { fields: ['paymentDate'] }
  ]
});

export default Payment;
