const {DataTypes} = require('sequelize');
const dbConnect  = require('../dbConnect');

const User = dbConnect.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    first_name: {
        type: DataTypes.STRING,
    },
    last_name: {
        type: DataTypes.STRING,
    },
    age: {
        type: DataTypes.INTEGER
    }
})

User.sync();

module.exports = User;