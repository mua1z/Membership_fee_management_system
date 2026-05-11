import { DataTypes, Model, Optional } from 'sequelize';
import bcrypt from 'bcryptjs';
import { sequelize } from '../lib/db';
import SectorUnit from './SectorUnit';

interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password?: string;
  role: 'admin' | 'sector_officer' | 'expert';
  sectorUnitId?: number;
  fullName: string;
  isActive: boolean;
  profilePic?: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'password' | 'role' | 'sectorUnitId' | 'isActive' | 'profilePic'> {}

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  public role!: 'admin' | 'sector_officer' | 'expert';
  public sectorUnitId?: number;
  public fullName!: string;
  public isActive!: boolean;
  public profilePic?: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public async comparePassword(candidatePassword: string): Promise<boolean> {
    return bcrypt.compare(candidatePassword, this.password);
  }
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
    set(val: string) { (this as any).setDataValue('email', val ? val.toLowerCase().trim() : val); }
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM('admin', 'sector_officer', 'expert'),
    defaultValue: 'sector_officer'
  },
  sectorUnitId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: { model: 'sector_units', key: 'id' }
  },
  fullName: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  profilePic: {
    type: DataTypes.STRING(500),
    allowNull: true,
    defaultValue: null
  }
}, {
  sequelize,
  tableName: 'users',
  timestamps: true,
  hooks: {
    beforeCreate: async (user: User) => {
      if (user.password) {
        user.password = await bcrypt.hash(user.password, 10);
      }
    },
    beforeUpdate: async (user: User) => {
      if (user.changed('password')) {
        user.password = await bcrypt.hash(user.password, 10);
      }
    }
  }
});

User.belongsTo(SectorUnit, { foreignKey: 'sectorUnitId', as: 'assignedSectorUnit' });

export default User;
