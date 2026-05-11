import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../lib/db';
import SectorType from './SectorType';

class SectorUnit extends Model {
  public id!: number;
  public name!: string;
  public sectorTypeId!: number;

  public toJSON() {
    const v = Object.assign({}, this.get());
    v._id = v.id;
    return v;
  }
}

SectorUnit.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(255), allowNull: false },
  sectorTypeId: { 
    type: DataTypes.INTEGER, 
    allowNull: false,
    references: { model: 'sector_types', key: 'id' }
  }
}, {
  sequelize,
  tableName: 'sector_units',
  timestamps: false
});

SectorUnit.belongsTo(SectorType, { foreignKey: 'sectorTypeId', as: 'sectorType' });

export default SectorUnit;
