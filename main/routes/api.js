const express = require('express');
const router = express.Router();
const {Driver,customermodel,orders} = require ('../Project-2/main/models')


//orders
router.post('/order/add',orders)
router.get('order/id',Driver)


//customer routes
router.post('/customer/add',customermodel)

router.post()