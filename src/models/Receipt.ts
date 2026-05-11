import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../lib/db';

class Receipt extends Model {
  public id!: number;
  public receiptId!: string;
  public paymentDbId!: number;
  public memberDbId!: number;
  public memberId!: string;
  public memberName!: string;
  public amount!: number;
  public currency!: string;
  public periodMonth!: number;
  public periodYear!: number;
  public paymentMethod!: string;
  public issuedBy!: string;
  public issuedAt!: Date;
  public branch!: string;
  public status!: string;
  public pdfPath!: string;

  public toJSON() {
    const v = Object.assign({}, this.get());
    v._id = v.id;
    v.period = { month: v.periodMonth, year: v.periodYear };
    if ((this as any).memberInfo) v.member = (this as any).memberInfo;
    if ((this as any).paymentInfo) v.payment = (this as any).paymentInfo;
    return v;
  }
}

Receipt.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  receiptId: {
    type: DataTypes.STRING(100),
    unique: true,
    allowNull: false,
    defaultValue: () => `RCP-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`
  },
  paymentDbId: { type: DataTypes.INTEGER, allowNull: false },
  memberDbId: { type: DataTypes.INTEGER, allowNull: false },
  memberId: { type: DataTypes.STRING(50), allowNull: false },
  memberName: { type: DataTypes.STRING(255), allowNull: false },
  amount: { type: DataTypes.DECIMAL(15, 2), allowNull: false },
  currency: { type: DataTypes.ENUM('ETB', 'USD'), defaultValue: 'ETB' },
  periodMonth: { type: DataTypes.INTEGER, allowNull: false },
  periodYear: { type: DataTypes.INTEGER, allowNull: false },
  paymentMethod: { type: DataTypes.STRING(100), allowNull: false },
  issuedBy: { type: DataTypes.STRING(255), allowNull: false },
  issuedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  branch: { type: DataTypes.STRING(100), allowNull: false },
  status: {
    type: DataTypes.ENUM('Issued', 'Voided'),
    defaultValue: 'Issued'
  },
  pdfPath: { type: DataTypes.STRING(500), allowNull: true }
}, {
  sequelize,
  tableName: 'receipts',
  timestamps: true,
  indexes: [
    { fields: ['receiptId'] },
    { fields: ['memberId'] },
    { fields: ['issuedAt'] }
  ]
});

export default Receipt;
