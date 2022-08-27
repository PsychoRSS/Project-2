const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Orderstats extends Model {}

Orderstats.init (
    {
        id:{
            type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
        },
        orderstatus: {
            type: DataTypes.STRING,
            allowNull: false
          },
    },
    {
        freezeTableName: true,
        tableName: "order",
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'order'
    }
);

module.exports = Orderstats;