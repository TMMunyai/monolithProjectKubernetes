import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';


const sequelize = new Sequelize(`postgres://${config.username}:${config.password}@${config.host}/${config.database}`);
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.\n')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })
  export default sequelize