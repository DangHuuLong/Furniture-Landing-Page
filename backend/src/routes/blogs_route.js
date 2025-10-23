const express = require('express')
const {getAllBlogs} = require('../controllers/blogs_controller')

const router = express.Router();

router.get('/', getAllBlogs)

module.exports = router