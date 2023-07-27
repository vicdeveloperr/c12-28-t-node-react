const { Router } = require('express');
const { getFavorites, getFavoritesByUser, postFavorites, deleteFavoriteUser } = require('../controllers/favorites.controller')

const router = Router();

router.get('/', getFavorites);
router.get('/:id', getFavoritesByUser);
router.post('/', postFavorites);
router.delete('/:idUser/:idProduct', deleteFavoriteUser);

module.exports = router;