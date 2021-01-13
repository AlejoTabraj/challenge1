import Sequelize from 'sequelize';
import postModel from '../models/postModel.js';

const { DATABASE, USERNAME, PASSWORD, HOST } = process.env

console.log('lolo', DATABASE)

const sequelize = new Sequelize('tvSJyqj8Qp', 'tvSJyqj8Qp', 'A8avOh85Ze', {
  host: 'remotemysql.com',
  dialect: 'mysql' 
});

sequelize
 .authenticate()
 .then(() => {
  console.info('INFO - Database connected.')
 })
 .catch(err => {
  console.error('ERROR - Unable to connect to the database:', err)
 })

export const Post = postModel(sequelize, Sequelize);



export const createTables = async () => {
    await sequelize.sync({ force: false });
    console.log('modelos sincronizados');
};
