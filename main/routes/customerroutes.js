const {models} = require('../models/customer');
const Joi = require('joi'); //using joi for data validation

//arrow function for adding a new customer
exports.addCustomer = (req, res) => {
    const data = req.body;
    const schema = Joi.object().keys({
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        email: Joi.string().email(),
        password: Joi.string().required(),
        address: Joi.string().required(),
        phone_number: Joi.number().required(),
    })
    //validating the data entry fits the database schema properly.
    Joi.validate(data, schema, async (err, value) => {
        if (err){
            res.status(422)({
                status: 'Error',
                message: "Invalid data input format",
                data: data,
            });

            //check for existing email in database. ensures each customer has a unique email address.
        } else {
            let customer = await models.Customer.findOne({
                where: {email: data.email}
            })
            if(customer){
                res.status(422)({
                    status: "Error",
                    message: "Email Address is already in use.",
                    data: data,
                })
            } else {
                //creating the new customer in the customer table
                try {
                    let newCustomer = await models.Customer.create({
                        first_name: data.first_name,
                        last_name: data.last_name,
                        email: data.email,
                        password: data.password,
                        address: data.address,
                        phone_number: data.phone_number,
                    })
                    res.status(200)({
                        status: 'Success',
                        message: "Customer created successfully!",
                        data: newCustomer.get({plain: true})
                    });
                } catch (error) {
                    res.status(500)({
                        status: "error",
                        message: "Failed to create new customer.",
                        data: data
                    });
                }
            }
        }
    })
}