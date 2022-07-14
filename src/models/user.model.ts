import { DataTypes, Sequelize } from "sequelize";

module.exports = (sequelize: Sequelize) => {
  const User = sequelize.define("User", {
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
  });
  return User;
};