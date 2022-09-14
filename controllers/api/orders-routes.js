const { Customer } = require('../../models');
const Joi = require('joi'); //using joi for data validation
const router = require('express').Router();


//arrow function for adding a new order
router.post('/add', async (req, res) => {
    const data = req.body;
    const schema = Joi.object().keys({
        customer_id: Joi.number().required(),
        driver_id: Joi.number().required(),
        size: Joi.string().valid('Small', 'Medium', 'Large').required(),
        cheese: Joi.boolean().truthy('yes').falsy('no').sensitive(),
        pepperroni: Joi.boolean().truthy('yes').falsy('no').sensitive(),
        hamburger: Joi.boolean().truthy('yes').falsy('no').sensitive(),
    })

    //validating the data is in the correct format for the table
    Joi.validate(data, schema, async (err, value) => {
        if (err) {
            res.status(422) ({
                status: 'Error',
                message: 'The data supplied was invalid',
                data: data
            });
        } else {
            let user = await models.Customer.findOne({
                where: {id: data.customer_id}
            })
            if(user){

                //creating the new order based on inputs
                try{
                    let order = await models.Orders.create({
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
            //must be a customer already in the database to create an order
            } else {
                res.status(404)({
                    status: 'error',
                    message: 'Not a valid customer',
                    data: data
                });
            }
                
        }
    })
})

router.get('/get', async (req, res) => {
    let order = await models.Orders.findOne({
        where: {id: customer_id}
    })
    let customerData = await order.getUser()
    let customer = {
        first_name : customerData.first_name,
        last_name: customerData.last_name,
        address: customerData.address,
    }
    res.status(200) ({
        status: 'success',
        message: 'Order Found!',
        data : {order, customer}
    });
    
});

module.exports = router;

