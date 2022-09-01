const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Customer extends Model {}

        Customer.init (
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            
            login_id:{
                type: DataTypes.INTEGER,
                allowNull: false
        
            },

            first_name: {
                type: DataTypes.STRING,
                allowNull : false
            },

            last_name:{
                type: DataTypes.STRING,
                allowNull: false
            },

            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            
            address: {
                type: DataTypes.TEXT,
                allowNull: false
            },

            phone_number: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
        },
        
        {
            sequelize,
            underscored: true,
            freezeTableName: true,
            tableName: "customer",
            modelName: 'Customer'
        }
    );
  module.exports = Customer;





            
