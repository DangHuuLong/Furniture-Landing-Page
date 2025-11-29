const Category = require('../models/category_model');
const Product = require('../models/product_model');

// Lấy danh sách category, tính stock từ tổng stock product
async function getAllCategories(req, res) {
  try {
    const { visible } = req.query;

    const filter = {};
    if (visible === 'true') filter.isVisible = true;
    if (visible === 'false') filter.isVisible = false;

    const categories = await Category.find(filter)
      .sort({ createdAt: -1 })
      .lean();

    // Gom stock theo category từ bảng Product
    const stockStats = await Product.aggregate([
      {
        $group: {
          _id: '$category',
          totalStock: { $sum: '$stock' },
        },
      },
    ]);

    const stockMap = stockStats.reduce((acc, item) => {
      if (item._id) {
        acc[item._id.toString()] = item.totalStock;
      }
      return acc;
    }, {});

    const result = categories.map((cat) => ({
      ...cat,
      stock: stockMap[cat._id.toString()] || 0,
    }));

    return res.json(result);
  } catch (err) {
    console.error('getAllCategories error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

// Lấy 1 category theo id, kèm stock tổng từ product
async function getCategoryById(req, res) {
  try {
    const { id } = req.params;
    const category = await Category.findById(id).lean();

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    const stockStats = await Product.aggregate([
      { $match: { category: category._id } },
      {
        $group: {
          _id: '$category',
          totalStock: { $sum: '$stock' },
        },
      },
    ]);

    const totalStock =
      stockStats.length > 0 ? stockStats[0].totalStock : 0;

    return res.json({
      ...category,
      stock: totalStock,
    });
  } catch (err) {
    console.error('getCategoryById error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

// Lấy category + danh sách products thuộc category đó
async function getCategoryWithProducts(req, res) {
  try {
    const { id } = req.params;

    const category = await Category.findById(id).lean();
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    const products = await Product.find({ category: id }).lean();

    const totalStock = products.reduce(
      (sum, p) => sum + (p.stock || 0),
      0
    );

    return res.json({
      category: {
        ...category,
        stock: totalStock,
      },
      products,
    });
  } catch (err) {
    console.error('getCategoryWithProducts error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

// Tạo mới 1 category (stock lưu DB, hiển thị tính lại từ product)
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
      stock: stock || 0,
      isVisible,
    });

    return res.status(201).json(newCategory);
  } catch (err) {
    console.error('createCategory error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

// Cập nhật thông tin category
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

// Xóa category, chặn xóa nếu vẫn còn product
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
