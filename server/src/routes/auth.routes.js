const { Router } = require('express');
const router = Router();
const {signIn, signUp} = require('../controllers/auth.controller');
const { checkDuplicateUser } = require('../middlewares/verifySignup')

router.post('/signup', checkDuplicateUser, signUp);
router.post('/signin', signIn);

module.exports = router;