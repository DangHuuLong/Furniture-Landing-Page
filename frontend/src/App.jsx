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
import VerifyCode from "./pages/Auth/forgot_password/verify_code";
import SetNewPassword from "./pages/Auth/forgot_password/set_new_password";

function Shell() {
  const { isCartOpen, toggleCart, closeCart } = useContext(CartContext);
  const location = useLocation();

  const p = location.pathname;
  const hideChrome =
    p === "/" ||
    p.startsWith("/signup") ||
    p.startsWith("/forgotpassword") ||
    p.startsWith("/verifycode") ||
    p.startsWith("/setnewpassword");

  return (
    <>
      {!hideChrome && <Header toggleCart={toggleCart} />}
      {isCartOpen && <CartSidebar onClose={closeCart} />}

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path="/shop/product/:sku" element={<SingleProduct />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/comparison' element={<ProductComparison />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/verifycode' element={<VerifyCode />} />
        <Route path='/setnewpassword' element={<SetNewPassword />} />
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
