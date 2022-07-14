import { DataTypes, Sequelize } from 'sequelize';

module.exports = function (sequelize: Sequelize) {
  return sequelize.define('Comment', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    comment: { type: DataTypes.TEXT, allowNull: false },
  })
};