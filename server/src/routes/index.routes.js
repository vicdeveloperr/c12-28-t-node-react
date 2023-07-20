const { Router } = require('express');

const router = Router();

router.use('/products', require('./products.routes'));
router.use('/users', require('./users.routes'));
router.use('/roles', require('./roles.routes'));
router.use('/auth', require('./auth.routes'));
router.use('/pm', require('./payment_method.routes'));
router.use('/favorites', require('./favorites.routes'));
router.use('/carts', require('./carts.routes'));
router.use('/addresses', require('./addresses.routes'));
router.use('/orders', require('./orders.routes'));
router.use('/order_details', require('./order_details.routes'));
router.use('/categories', require('./categories.routes'));

module.exports = router;