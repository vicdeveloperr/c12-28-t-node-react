const { Router } = require('express');
// const controllers = require('../controllers/index');
const { createProduct, getProducts, getProduct, getProductByName, getProductByCategory, editProductPhoto, deleteProduct } = require('../controllers/products.controller');
const { verifyToken, isUser } = require('../middlewares/authJwt');

const router = Router();

// endpoint publico
router.get('/', getProducts);
router.get('/:id', getProduct);
router.get('/find/:name', getProductByName);
router.get('/category/:idCategory', getProductByCategory);

router.post('/', /* [verifyToken, isUser], */ createProduct);
router.put('/:id', editProductPhoto);
router.delete('/:id', /* [verifyToken, isUser], */ deleteProduct);


module.exports = router;