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
            validate: function(input){
                const done = this.async();
            }
          },
          
          size: {
            type: DataTypes.STRING,
            allowNull: false
          },
          cheese:{
            type : DataTypes.boolean,
            allowNull: false
          }, 
          pepporroni:{
            type : DataTypes.boolean,
            allowNull: false
          },
          hamburger:{
            type : DataTypes.boolean,
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