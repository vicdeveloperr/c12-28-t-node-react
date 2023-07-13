const { Router } = require('express');

const router = Router();

router.use('/products', require('./products.routes'));
router.use('/users', require('./users.routes'));
router.use('/roles', require('./roles.routes'));
router.use('/auth', require('./auth.routes'));

module.exports = router;