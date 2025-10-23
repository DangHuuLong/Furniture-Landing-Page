const { readDB } = require('../utils/read_database');

async function getAllProducts(req, res) {
  const db = await readDB();
  const products = db && db.products ? db.products : [];
  res.json(products);
}

module.exports = { getAllProducts };
