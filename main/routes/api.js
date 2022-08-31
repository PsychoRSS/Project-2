const express = require('express');
const router = express.Router();

const orderRoutes = require('./ordersroutes');


//orders
router.post('/order/add', orderRoutes.addOrder);
router.get('order/id,'  )


//customer routes
router.post('/customer/add')

router.post()