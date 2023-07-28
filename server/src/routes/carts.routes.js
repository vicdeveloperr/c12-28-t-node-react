const { Router } = require('express');
const { getCarts, addProductCart, deleteProductCart, getCartUser, getProductsCartUser } = require('../controllers/cart.controller')

const router = Router();

router.get('/', getCarts);
router.get('/detail/:idUser', getProductsCartUser)
router.get('/:idUser', getCartUser);
router.post('/:idUser', addProductCart);
router.delete('/:idUser/:idProduct', deleteProductCart);

module.exports = router;