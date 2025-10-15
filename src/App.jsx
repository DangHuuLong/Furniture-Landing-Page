import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import Footer from './pages/Home/Footer';
import Header from './pages/Home/Header';
import Home from './pages/Home/home';
import Shop from './pages/Shop/shop';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import ProductComparison from './pages/ProductComparison/ProductComparison';
import CartSidebar from "./pages/CartSidebar/CartSidebar";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import { CartContext } from './contexts/CartContext'; 

function App() {
  const { isCartOpen, toggleCart, closeCart } = useContext(CartContext);
  return (
    <BrowserRouter>
      <Header toggleCart={toggleCart} />
      {isCartOpen && <CartSidebar onClose={closeCart} />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/singleProduct' element={<SingleProduct />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/comparison' element={<ProductComparison />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;