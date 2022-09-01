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
    