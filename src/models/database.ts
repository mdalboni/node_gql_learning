import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelizeDB = new Sequelize('sqlite::memory:');

export default sequelizeDB;
