import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../lib/db';

class SectorType extends Model {
  public id!: number;
  public name!: string;

  public toJSON() {
    const v = Object.assign({}, this.get());
    v._id = v.id;
    return v;
  }
}

SectorType.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(100), allowNull: false, unique: true }
}, {
  sequelize,
  tableName: 'sector_types',
  timestamps: false
});

export default SectorType;
