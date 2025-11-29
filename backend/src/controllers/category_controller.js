const Category = require('../models/category_model');
const Product = require('../models/product_model');

// GET /categories
async function getAllCategories(req, res) {
  try {
    const { visible } = req.query;

    const filter = {};
    if (visible === 'true') filter.isVisible = true;
    if (visible === 'false') filter.isVisible = false;

    const categories = await Category.find(filter)
      .sort({ createdAt: -1 })
      .lean();

    return res.json(categories);
  } catch (err) {
    console.error('getAllCategories error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

// GET /categories/:id
async function getCategoryById(req, res) {
  try {
    const { id } = req.params;
    const category = await Category.findById(id).lean();

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    return res.json(category);
  } catch (err) {
    console.error('getCategoryById error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

// GET /categories/:id/products
async function getCategoryWithProducts(req, res) {
  try {
    const { id } = req.params;

    const category = await Category.findById(id).lean();
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    const products = await Product.find({ category: id }).lean();

    return res.json({
      category,
      products,
    });
  } catch (err) {
    console.error('getCategoryWithProducts error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

// POST /categories
async function createCategory(req, res) {
  try {
    const { categoryName, imagePath, stock, isVisible } = req.body || {};

    if (!categoryName) {
      return res.status(400).json({ message: 'categoryName is required' });
    }

    const existed = await Category.findOne({ categoryName }).lean();
    if (existed) {
      return res
        .status(409)
        .json({ message: 'Category name already exists' });
    }

    const newCategory = await Category.create({
      categoryName,
      imagePath,
      stock,
      isVisible,
    });

    return res.status(201).json(newCategory);
  } catch (err) {
    console.error('createCategory error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

// PUT /categories/:id
async function updateCategory(req, res) {
  try {
    const { id } = req.params;
    const { categoryName, imagePath, stock, isVisible } = req.body || {};

    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    if (categoryName !== undefined) category.categoryName = categoryName;
    if (imagePath !== undefined) category.imagePath = imagePath;
    if (stock !== undefined) category.stock = stock;
    if (isVisible !== undefined) category.isVisible = isVisible;

    const updated = await category.save();
    return res.json(updated);
  } catch (err) {
    console.error('updateCategory error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

// DELETE /categories/:id
async function deleteCategory(req, res) {
  try {
    const { id } = req.params;

    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    const productCount = await Product.countDocuments({ category: id });
    if (productCount > 0) {
      return res.status(400).json({
        message: 'Cannot delete category that still has products',
        productCount,
      });
    }

    await category.deleteOne();

    return res.json({ message: 'Category deleted successfully' });
  } catch (err) {
    console.error('deleteCategory error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = {
  getAllCategories,
  getCategoryById,
  getCategoryWithProducts,
  createCategory,
  updateCategory,
  deleteCategory,
};
