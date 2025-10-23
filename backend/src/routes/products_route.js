const express = require('express');
const { getAllProducts, getProductBySku} = require('../controllers/products_controller');

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:sku', getProductBySku); 

module.exports = router;
