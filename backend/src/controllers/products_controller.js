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

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.json(product);
  } catch (err) {
    console.error('getProductBySku error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

async function getProductById(req, res) {
  try {
    const { id } = req.params;
    const product = await Product.findById(id).lean();
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    return res.json(product);
  } catch (err) {
    console.error('getProductById error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

// POST /products 
async function createProduct(req, res) {
  try {
    const payload = req.body || {};

    if (!payload.SKU || !payload.name || !payload.price) {
      return res
        .status(400)
        .json({ message: 'SKU, name and price are required' });
    }

    const product = await Product.create(payload);
    return res.status(201).json(product);
  } catch (err) {
    console.error('createProduct error:', err);

    if (err.code === 11000) {
      return res.status(409).json({ message: 'SKU already exists' });
    }

    return res.status(500).json({ message: 'Internal server error' });
  }
}

// PUT /products/:id 
async function updateProduct(req, res) {
  try {
    const { id } = req.params;
    const updates = req.body || {};

    const product = await Product.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.json(product);
  } catch (err) {
    console.error('updateProduct error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

// DELETE /products/:id 
async function deleteProduct(req, res) {
  try {
    const { id } = req.params;
    const result = await Product.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.json({ message: 'Product deleted' });
  } catch (err) {
    console.error('deleteProduct error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

async function deleteManyProducts(req, res) {
  try {
    const { ids } = req.body;     

    if (!Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ message: 'No product ids provided' });
    }

    await Product.deleteMany({ _id: { $in: ids } });

    return res.status(200).json({
      message: 'Delete products successfully',
      deletedIds: ids,
    });
  } catch (err) {
    console.error('deleteManyProducts error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}


module.exports = {
  getAllProducts,
  getProductBySku,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  deleteManyProducts,
};
