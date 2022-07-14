import { DataTypes, Sequelize } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');

const User = require(`${__dirname}/user.model`)(sequelize)
const Comment = require(`${__dirname}/comment.model`)(sequelize)

Comment.belongsTo(User);
User.hasMany(Comment);

sequelize.sync({ force: true });

const db = {
    User,
    Comment,
    sequelize,
}
export default db;