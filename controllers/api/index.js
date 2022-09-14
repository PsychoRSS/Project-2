const router = require('express').Router();
const userRoutes = require('./customer-routes');
const orderRoutes = require('./orders-routes');

router.use('/users', userRoutes);
router.use('/orders', orderRoutes);

module.exports = router;