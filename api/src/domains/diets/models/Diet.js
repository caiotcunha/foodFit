const {DataTypes} = require('sequelize')
const sequelize = require('../../../../database/index')

const Diet = sequelize.define('Diet', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    diet: {
        type: DataTypes.STRING,
        allowNull: false
    },
    weight: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    goal: {
        type: DataTypes.STRING,
        allowNull: false
    },
    calories: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    restrictions: {
        type: DataTypes.STRING,
        allowNull: false
    }   
});

module.exports = Diet