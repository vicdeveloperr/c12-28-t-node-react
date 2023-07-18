const { Router } = require('express');
// const controllers = require('../controllers/index');
const { createProduct, getProducts, deleteProduct, getCategories } = require('../controllers/products.controller');
const { verifyToken, isSeller, isAdmin } = require('../middlewares/authJwt');

const router = Router();

router.get('/', getProducts);
// router.get('/:id', controllers.getProduct);
router.post('/', /* [verifyToken, isSeller], */ createProduct);
router.delete('/:id', [verifyToken, isAdmin], deleteProduct);
// router.put('/productId', controllers.postProduct);
router.get('/categories', getCategories);

module.exports = router;