const express = require('express');
const {
  getAllProducts,
  getProductBySku,
  createProduct,
  updateProduct,
  deleteProduct,
  deleteManyProducts,
} = require('../controllers/products_controller');

const router = express.Router();

// customer + admin
router.get('/', getAllProducts);
router.get('/:sku', getProductBySku);

// admin
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.post('/bulk-delete', deleteManyProducts);

module.exports = router;
