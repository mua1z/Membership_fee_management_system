import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../lib/db';

class SectorUnitCategory extends Model {
  public sectorUnitId!: number;
  public memberCategoryId!: number;
}

SectorUnitCategory.init({
  sectorUnitId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: { model: 'sector_units', key: 'id' }
  },
  memberCategoryId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: { model: 'member_categories', key: 'id' }
  }
}, {
  sequelize,
  tableName: 'sector_unit_categories',
  timestamps: false
});

export default SectorUnitCategory;
