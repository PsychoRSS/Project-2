const { Customer } = require('../../models');
const router = require('express').Router();


//arrow function for adding a new order
router.post('/add', async (req, res) => { 
    const data = req.body;
    
 //creating the new order based on inputs
    try{
            let order = await models.Orders.create({
            customer_id: data.customer_id,
            size: data.size,
            cheese: data.cheese,
            pepperroni: data.pepperroni,
            hamburger: data.hamburger,
            })
            res.status(200).json ({
            status: 'Success',
            message: 'Order Created!',
            data: order.get({plain:true})
            })
                } catch (error) {
                    res.status(500).json ({
                    status: 'error',
                    message: 'Order not created.',
                    data: data
                });
                }
            
            })
  


router.get('/get', async (req, res) => {
    const data = req.body;
    let order = await models.Orders.findOne({
        where: {id: data.customer_id}
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
