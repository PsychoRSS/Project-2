module.exports = (sequelize, DataTypes) =>{
    const Customer = sequelize.define(
        "customer_info",
        {
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

            address: {
                type: DataTypes.TEXT,
                allowNull: false
            },

            phone_number: {
                type: DataTypes.INTEGER,
                allowNull: false
            },


        },
        {underscored: true,
        freezeTableName: true,
        tableName: "customer_info",
    }
    );
    customer.associate = (models) => {
        models.customer.belongsTo(models.customerLogin,{foreignKey: "login_id"})
    };
    return Customer;
};