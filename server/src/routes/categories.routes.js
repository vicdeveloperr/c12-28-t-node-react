const { Router } = require('express');
const { getCategories, getCategory, postCategory, deleteCategory, updateCategory } = require('../controllers/categories.controller')

const router = Router();

router.get('/', getCategories);
router.get('/:id', getCategory);
router.post('/', postCategory);
router.delete('/:id', deleteCategory);
router.put('/:id', updateCategory);

module.exports = router;