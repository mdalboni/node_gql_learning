import sequelizeDB from "./database";
import { Model, DataTypes } from 'sequelize';

const User = sequelizeDB.define('User', {
    username: DataTypes.STRING,
    decription: DataTypes.STRING,
  });

export default User;