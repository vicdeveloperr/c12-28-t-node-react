const { Router } = require('express');
const { getOrder_details } = require('../controllers/order_details.controller')

const router = Router();

router.get('/', getOrder_details);

module.exports = router;