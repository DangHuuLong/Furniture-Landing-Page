const express = require('express');
const {
  getAllProducts,
  getProductBySku,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  deleteManyProducts,
} = require('../controllers/products_controller');

const router = express.Router();

router.get('/', getAllProducts);
router.get('/id/:id', getProductById);  
router.get('/:sku', getProductBySku);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.post('/bulk-delete', deleteManyProducts);

module.exports = router;
