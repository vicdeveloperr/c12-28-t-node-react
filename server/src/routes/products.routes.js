const { Router } = require('express');
// const controllers = require('../controllers/index');
const { createProduct, getProducts, getProduct, editProductPhoto, deleteProduct, getCategories } = require('../controllers/products.controller');
const { verifyToken, isUser } = require('../middlewares/authJwt');

const router = Router();

// endpoint publico
router.get('/', getProducts);
router.get('/:id', getProduct);

router.post('/', /* [verifyToken, isUser], */ createProduct);
router.put('/:id', editProductPhoto);
router.delete('/:id', /* [verifyToken, isUser], */ deleteProduct);
// router.put('/productId', controllers.postProduct);
router.get('/categories', getCategories);

module.exports = router;