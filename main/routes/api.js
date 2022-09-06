const express = require('express');
const router = express.Router();
const withAuth = require('../utils/auth')
const orderRoutes = require('./ordersroutes');
const customerRoutes = require('./customerroutes');
const loginRoutes = require('./loginroute')

//orders
router.post('/order/add', withAuth, orderRoutes.orderAdd);
router.get('order/id,', withAuth, orderRoutes.getOrderById);


//customer routes
router.post('/customer/add', customerRoutes.addCustomer);
router.post('/login', loginRoutes.loginCustomer);
