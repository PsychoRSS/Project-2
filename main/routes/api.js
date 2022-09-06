const express = require('express');
const router = express.Router();
const orderRoutes = require('./ordersroutes');
const customerRoutes = require('./customerroutes');
const loginRoutes = require('./loginroute')

//orders
router.post('/order/add', orderRoutes.orderAdd);
router.get('order/id,', orderRoutes.getOrderById);


//customer routes
router.post('/customer/add', customerRoutes.addCustomer);
router.post('/login', loginRoutes.loginCustomer);

router.post()