const { Router } = require('express');
const { getAddresses, getAddress, postAddress, deleteAddress, updateAddress } = require('../controllers/addresses.controller')

const router = Router();

router.get('/', getAddresses);
router.get('/:id', getAddress);
router.post('/', postAddress);
router.delete('/:id', deleteAddress);
router.put('/:id', updateAddress);

module.exports = router;