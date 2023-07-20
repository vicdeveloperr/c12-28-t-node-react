const { Router } = require('express');
const { getFavorites } = require('../controllers/favorites.controller')

const router = Router();

router.get('/', getFavorites);

module.exports = router;