const { readDB } = require('../utils/read_database');

async function getAllProducts(req, res) {
  const db = await readDB();
  const products = db && db.products ? db.products : [];
  res.json(products);
}

async function getProductBySku(req, res) {
  const db = await readDB();
  const products = db && db.products ? db.products : [];
  const sku = req.params.sku;
  const product = products.find(p => p.SKU === sku);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
}

module.exports = { getAllProducts, getProductBySku};
