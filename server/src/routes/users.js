const { Router } = require('express');
const controllers = require('../controllers/index')

const router = Router();

router.get('/', controllers.getUsers.findAll);

module.exports = router;