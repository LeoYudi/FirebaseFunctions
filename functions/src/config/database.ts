import * as dotenv from 'dotenv';
import { Dialect } from 'sequelize/types';
dotenv.config();

export default {
  dialect: 'mysql' as Dialect,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: 3306,
  define: {
    timestamps: false,
    underscored: true,
  },
};
