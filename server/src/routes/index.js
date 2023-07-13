const { Router } = require('express');
const controllers = require('../controllers/index')

const router = Router();

router.get('/', controllers.getProducts);
//router.get('/:idProduct', controllers.getProductByPk);

module.exports = router;