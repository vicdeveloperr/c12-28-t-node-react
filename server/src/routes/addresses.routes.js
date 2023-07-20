const { Router } = require('express');
const { getAddresses } = require('../controllers/addresses.controller')

const router = Router();

router.get('/', getAddresses);

module.exports = router;