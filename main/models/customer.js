const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Customer extends Model {
    // checkPassword(loginPw) {
    //     return bcrypt.compareSync(loginPw, this.password);
    // }
}

        Customer.init(
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
        // {
        //     hooks: {
        //       // set up beforeCreate lifecycle "hook" functionality
        //       async beforeCreate(newUserData) {
        //         newUserData.password = await bcrypt.hash(newUserData.password, 10);
        //         return newUserData;
        //       },
        
        //       async beforeUpdate(updatedUserData) {
        //         updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        //         return updatedUserData;
        //       }
        //     }
        // },
        
        {
            sequelize,
            underscored: true,
            freezeTableName: true,
            tableName: "customer",
            modelName: 'Customer'
        }
    );
  module.exports = Customer;





            
