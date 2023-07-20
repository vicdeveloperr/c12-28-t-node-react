const { Router } = require('express');
const {getPhotos, postPhoto} = require('../controllers/photos.controller');

const router = Router();

router.get('/', getPhotos);
router.post('/', postPhoto);

module.exports = router;