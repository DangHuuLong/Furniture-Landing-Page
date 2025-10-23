const express = require('express');
const { getAllProducts } = require('../controllers/products_controller');

const router = express.Router();

router.get('/', getAllProducts); 

module.exports = router;
