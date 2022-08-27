const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Driver extends Model {}

Driver.init (
    {
        id:{
            type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
          }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Driver'
    }
);

module.exports = Location;