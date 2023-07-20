const { Router } = require('express');
const { getCarts } = require('../controllers/cart.controller')

const router = Router();

router.get('/', getCarts);

module.exports = router;