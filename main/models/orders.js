const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Orders extends Model {}

Orders.init (
    {
        id:{
            type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
        },
        customer_id: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          
          size: {
            type: DataTypes.STRING,
            allowNull: false
          },
          cheese:{
            type : DataTypes.BOOLEAN,
            allowNull: false
          }, 
          pepperroni:{
            type : DataTypes.BOOLEAN,
            allowNull: false
          },
          hamburger:{
            type : DataTypes.BOOLEAN,
            allowNull: false
          },
          order_status:{
            type: DataTypes.INTEGER,
            references: {
              model: 'Orderstatus',
              key: 'id',
            },
          }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Orders'
    }
);

module.exports = Orders;