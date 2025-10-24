import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
import Login from "./pages/Auth/login";
import SignUp from "./pages/Auth/signup";
import ForgotPassword from "./pages/Auth/forgot_password/forgot_password";

function Shell() {
  const { isCartOpen, toggleCart, closeCart } = useContext(CartContext);
  const location = useLocation();

  // Ẩn header/footer cho /login và /signup (kể cả có query string)
  const hideChrome =
    location.pathname.startsWith("/login") ||
    location.pathname.startsWith("/signup");

  return (
    <>
      {!hideChrome && <Header toggleCart={toggleCart} />}
      {isCartOpen && <CartSidebar onClose={closeCart} />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path="/shop/product/:sku" element={<SingleProduct />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/comparison' element={<ProductComparison />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login/forgotpassword' element={<ForgotPassword />} />
      </Routes>

      {!hideChrome && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}

export default App;
