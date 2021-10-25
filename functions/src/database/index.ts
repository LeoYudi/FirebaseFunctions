import { Sequelize } from 'sequelize';
import dbConfig from '../config/database';

const connection = new Sequelize(dbConfig);

connection.authenticate()
  .then(() => {
    console.log('conexão criada');
  })
  .catch((error) => {
    console.log(error);
  });

export { connection };
