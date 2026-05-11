import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../lib/db';
import { v4 as uuidv4 } from 'uuid';

const DEFAULT_CONTRIBUTION_RULES = {
  salaryBased: {
    calculationBase: 'Net',
    pensionPercentage: 7,
    taxBrackets: [
      { threshold: 2000, rate: 0,    deduction: 0    },
      { threshold: 4000, rate: 0.15, deduction: 300  },
      { threshold: 7000, rate: 0.20, deduction: 500  },
      { threshold: 10000, rate: 0.25, deduction: 850 },
      { threshold: 14000, rate: 0.30, deduction: 1350 },
      { threshold: 9999999, rate: 0.35, deduction: 2050 }
    ],
    government: [
      { minSalary: 0,     maxSalary: 4000,      percentage: 0.6 },
      { minSalary: 4001,  maxSalary: 5000,      percentage: 0.8 },
      { minSalary: 5001,  maxSalary: 6000,      percentage: 1.0 },
      { minSalary: 6001,  maxSalary: 7000,      percentage: 1.2 },
      { minSalary: 7001,  maxSalary: 8000,      percentage: 1.4 },
      { minSalary: 8001,  maxSalary: 9000,      percentage: 1.6 },
      { minSalary: 9001,  maxSalary: 10000,     percentage: 1.8 },
      { minSalary: 10001, maxSalary: 999999999, percentage: 2.0 }
    ]
  },
  fixedFees: {
    student:     1,
    farmer:      5,
    pastoralist: 5,
    labor:       5,
    informal:    5
  },
  business: { micro: 5, small: 10, medium: 20 },
  investor: [
    { minCapital: 0,        maxCapital: 5000000,      fee: 500  },
    { minCapital: 5000001,  maxCapital: 10000000,     fee: 1000 },
    { minCapital: 10000001, maxCapital: 999999999999, fee: 2000 }
  ],
  wing: {
    salary_1k_3k:   2,
    salary_3k_5k:   5,
    salary_5k_10k:  10,
    salary_10k_plus: 20,
    farmer:      1,
    informal:    1,
    micro_small: 2,
    general_annual: 10
  }
};

const DEFAULT_DISTRIBUTION = { hqPercentage: 20, branchPercentage: 80 };

const DEFAULT_BRANCHES = [
  { _id: uuidv4(), name: 'Dire Dawa Main', code: 'MAIN', cluster: 'Urban', isActive: true },
  { _id: uuidv4(), name: 'Kebele 01', code: 'K01', cluster: 'Urban', isActive: true },
  { _id: uuidv4(), name: 'Kebele 02', code: 'K02', cluster: 'Urban', isActive: true },
  { _id: uuidv4(), name: 'Kebele 03', code: 'K03', cluster: 'Urban', isActive: true },
  { _id: uuidv4(), name: 'Kebele 04', code: 'K04', cluster: 'Urban', isActive: true },
  { _id: uuidv4(), name: 'Kebele 05', code: 'K05', cluster: 'Urban', isActive: true },
  { _id: uuidv4(), name: 'Kebele 06', code: 'K06', cluster: 'Urban', isActive: true },
  { _id: uuidv4(), name: 'Kebele 07', code: 'K07', cluster: 'Urban', isActive: true },
  { _id: uuidv4(), name: 'Kebele 08', code: 'K08', cluster: 'Urban', isActive: true },
  { _id: uuidv4(), name: 'Kebele 09', code: 'K09', cluster: 'Urban', isActive: true },
  { _id: uuidv4(), name: 'Kebele 10', code: 'K10', cluster: 'Urban', isActive: true },
  { _id: uuidv4(), name: 'Women Wing', code: 'WOMEN', cluster: 'Urban', isActive: true },
  { _id: uuidv4(), name: 'Youth Wing', code: 'YOUTH', cluster: 'Urban', isActive: true }
];

const DEFAULT_SYSTEM = {
  organizationName:        'Dire Dawa City Administration Finance Bureau',
  currency:                'ETB',
  fiscalYearStart:         1,
  defaultLanguage:         'en',
  enableSmsNotifications:  false,
  enableEmailNotifications:false,
  defaulterThreshold:      3,
  receiptPrefix:           'RCP'
};

class Setting extends Model {
  public id!: number;
  public contributionRules!: any;
  public distribution!: any;
  public branches!: any;
  public system!: any;

  public toJSON() {
    const v = Object.assign({}, this.get());
    v._id = v.id;
    return v;
  }
}

Setting.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  contributionRules: { type: DataTypes.JSON, defaultValue: DEFAULT_CONTRIBUTION_RULES },
  distribution: { type: DataTypes.JSON, defaultValue: DEFAULT_DISTRIBUTION },
  branches: { type: DataTypes.JSON, defaultValue: DEFAULT_BRANCHES },
  system: { type: DataTypes.JSON, defaultValue: DEFAULT_SYSTEM }
}, {
  sequelize,
  tableName: 'settings',
  timestamps: true
});

export default Setting;
