require('dotenv').config();           
const express = require('express');
const cors = require('cors');

const productsRoute = require('./routes/products_route');
const blogsRoute = require('./routes/blogs_route');
const authRoute = require('./routes/auth_route');
const categoriesRoute = require('./routes/categories_route')
const { connectMongo } = require('./utils/mongo'); 

const app = express();

connectMongo();                          

app.use(cors());
app.use(express.json({ limit: '10mb' }));

app.use('/products', productsRoute);
app.use('/blogs', blogsRoute);
app.use('/auth', authRoute);
app.use('/categories', categoriesRoute);


app.get('/health', function (_req, res) {
  res.json({ ok: true });
});

module.exports = app;
