const { Router } = require('express');
// const controllers = require('../controllers/index')
const {getRoles} = require('../controllers/roles.controllers')

const router = Router();

router.get('/', getRoles);

module.exports = router;