const { Router } = require('express');
// const controllers = require('../controllers/index')
const { getUsers, getUserByEmail, getUser, updateUser } = require('../controllers/users.controllers')
const { verifyToken, isAdmin } = require('../middlewares/authJwt');

const router = Router();

router.get('/', getUsers);
<<<<<<< HEAD
router.get('/mail', getUserByEmail);
router.get('/:id', getUser);
router.put('/:id', updateUser);
=======
router.get('/:email', getUserByEmail);
router.post('/', [verifyToken, isAdmin], createUser)
>>>>>>> 9cae88e9c30a281eac7cecb5d41f1db50e835041

module.exports = router;
