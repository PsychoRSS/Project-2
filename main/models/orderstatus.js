const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Orderstatus extends Model {}

Orderstatus.init (
    {
        id:{
            type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
        },
        order_status: {
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

module.exports = Orderstatus;