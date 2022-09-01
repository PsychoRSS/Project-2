const express = require('express');
const router = express.Router();
const orderRoutes = require('./ordersroutes');


//orders
router.post('/order/add', orderRoutes.orderAdd);
router.get('order/id,', orderRoutes.getOrderById);


//customer routes
router.post('/customer/add')

router.post()