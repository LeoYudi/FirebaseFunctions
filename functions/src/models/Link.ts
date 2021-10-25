import { DataTypes, Model } from 'sequelize';
import { connection } from '../database';

class Link extends Model {
  public id!: number;
  public original!: string;
  public created!: string;
}

Link.init({
  original: DataTypes.STRING,
  created: DataTypes.STRING,
}, { sequelize: connection });

export { Link };
