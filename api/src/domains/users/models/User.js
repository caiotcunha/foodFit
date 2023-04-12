const {DataTypes} = require('sequelize');
const sequelize = require('../../../../database/index');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    weight: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    height: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    passwordToken: {
        type: DataTypes.STRING,
        allowNull: true
    }   
})

module.exports = User;