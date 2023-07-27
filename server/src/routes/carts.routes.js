const { Router } = require('express');
const { getCarts, addProductCart, deleteProductCart } = require('../controllers/cart.controller')

const router = Router();

router.get('/', getCarts);
router.post('/:idUser', addProductCart);
router.delete('/:id', deleteProductCart);

module.exports = router;