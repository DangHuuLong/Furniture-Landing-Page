const express = require('express');
const {
  getAllCategories,
  getCategoryById,
  getCategoryWithProducts,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/category_controller');

const router = express.Router();

router.get('/', getAllCategories);
router.get('/:id', getCategoryById);
router.get('/:id/products', getCategoryWithProducts);

router.post('/', createCategory);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

module.exports = router;
