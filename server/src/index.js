import 'dotenv/config';
import app from './app.js';
import productsRouter from './routes/products.js';
import blogsRouter from './routes/blogs.js';

app.use('/products', productsRouter);
app.use('/blogs', blogsRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
