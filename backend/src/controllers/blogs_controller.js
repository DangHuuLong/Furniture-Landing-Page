const {readDB} = require('../utils/read_database')

async function getAllBlogs(req, res) {
  const db = await readDB();
  const blogs = db && db.blogs ? db.blogs : []
  res.json(blogs)
}

module.exports = {getAllBlogs}