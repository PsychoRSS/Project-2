const {models} = require('../models/customer');
const Joi = require('joi');


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
    Joi.validate(data, schema, async (err, value) => {
        if (err){
            res.status(422)({
                status: 'Error',
                message: "Invalid data input format",
                data: data,
            });
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
            