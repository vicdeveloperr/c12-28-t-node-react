const { Router } = require('express');
// const controllers = require('../controllers/index')
const { getUsers, getUserByEmail, getUser, updateUser } = require('../controllers/users.controllers')
const { verifyToken, isAdmin } = require('../middlewares/authJwt');

const router = Router();

router.get('/', getUsers);
router.get('/mail', getUserByEmail);
router.get('/:id', getUser);
router.put('/:id', updateUser);

module.exports = router;