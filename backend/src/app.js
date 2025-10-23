const express = require('express')
const cors = require('cors')

const productsRoute = require('./routes/products_route')
const blogsRoute = require('./routes/blogs_route')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/products', productsRoute)
app.use('/blogs', blogsRoute)


app.get('/health', function (_req, res) {
  res.json({ ok: true })
})


module.exports = app;
