const {models} = require('../models/orders');
const Joi = require('joi');

exports.orderAdd = (req, res) => {
    const data = req.body;
    const schema = Joi.object().keys({
        customer_id: Joi.number().required(),
        driver_id: Joi.number().required(),
        size: Joi.string().valid('Small', 'Medium', 'Large').required(),
        cheese: Joi.boolean().truthy('yes').falsy('no').sensitive(),
        pepperroni: Joi.boolean().truthy('yes').falsy('no').sensitive(),
        hamburger: Joi.boolean().truthy('yes').falsy('no').sensitive(),
    })
    Joi.validate(data, schema, async (err, value) => {
        if (err) {
            res.status(422) ({
                status: 'Error',
                message: 'The data supplied was invalid',
                data: data
            });
        } else {
            let user = await models.Customermodel.findOne({
                where: {id: data.customer_id}
            })
            if(user){
                try{
                    let order = await models.orders.create({
                        customer_id: data.customer_id,
                        size: data.size,
                        cheese: data.cheese,
                        pepperroni: data.pepperroni,
                        hamburger: data.hamburger,
                    })
                    res.status(200) ({
                        status: 'Success',
                        message: 'Order Created!',
                        data: order.get({plain:true})
                    })
                } catch (error) {
                    res.status(500) ({
                        status: 'error',
                        message: 'Order not created.',
                        data: data
                    });
                }
            } else {
                res.status(404)({
                    status: 'error',
                    message: 'Not a valid customer',
                    data: data
                });
            }
                
        }
    })
}

exports.getOrderById = async (req, res) => {
    let customerData = await order.
}

