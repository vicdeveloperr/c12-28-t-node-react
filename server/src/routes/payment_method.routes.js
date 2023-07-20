const { Router } = require('express');
const {getPayment_method} = require('../controllers/payment_methods.controller')

const router = Router();

router.get('/', getPayment_method);

module.exports = router;