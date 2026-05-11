import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../lib/db';

class MemberCategory extends Model {
  public id!: number;
  public name!: string;

  public toJSON() {
    const v = Object.assign({}, this.get());
    v._id = v.id;
    return v;
  }
}

MemberCategory.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(255), allowNull: false, unique: true }
}, {
  sequelize,
  tableName: 'member_categories',
  timestamps: false
});

export default MemberCategory;
