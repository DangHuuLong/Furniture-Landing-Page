const Product = require('../models/product_model');

// GET /products
async function getAllProducts(req, res) {
  try {
    const products = await Product.find().lean();
    return res.json(products);
  } catch (err) {
    console.error('getAllProducts error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

// GET /products/:sku
async function getProductBySku(req, res) {
  try {
    const { sku } = req.params;
    const product = await Product.findOne({ SKU: sku }).lean();
    if (!product) return res.status(404).json({ message: 'Product not found' });
    return res.json(product);
  } catch (err) {
    console.error('getProductBySku error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

// POST /products 
async function createProduct(req, res) {
  try {
    const data = req.body || {};
    if (!data.SKU || !data.name || data.price == null || !data.category) {
      return res
        .status(400)
        .json({ message: 'SKU, name, price and category are required' });
    }

    const exists = await Product.findOne({ SKU: data.SKU });
    if (exists) {
      return res
        .status(409)
        .json({ message: 'Product with this SKU already exists' });
    }

    const product = await Product.create(data);
    return res.status(201).json({ message: 'Product created', product });
  } catch (err) {
    console.error('createProduct error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

// PUT /products/:id  
async function updateProduct(req, res) {
  try {
    const { id } = req.params;
    const update = req.body || {};

    const product = await Product.findByIdAndUpdate(id, update, {
      new: true,
      runValidators: true,
    }).lean();

    if (!product) return res.status(404).json({ message: 'Product not found' });
    return res.json({ message: 'Product updated', product });
  } catch (err) {
    console.error('updateProduct error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

// DELETE /products/:id  
async function deleteProduct(req, res) {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id).lean();
    if (!product) return res.status(404).json({ message: 'Product not found' });

    return res.json({ message: 'Product deleted' });
  } catch (err) {
    console.error('deleteProduct error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = {
  getAllProducts,
  getProductBySku,
  createProduct,
  updateProduct,
  deleteProduct,
};
