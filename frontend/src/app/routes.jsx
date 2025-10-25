import { Routes, Route } from "react-router-dom";
import CustomerLayout from "../layouts/CustomerLayout";
import AuthLayout from "../layouts/AuthLayout";
import AdminLayout from "../layouts/AdminLayout";

// AUTH pages 
import Login from "../modules/Auth/pages/login";
import SignUp from "../modules/Auth/pages/signup";
import ForgotPassword from "../modules/Auth/pages/forgot_password/forgot_password";
import VerifyCode from "../modules/Auth/pages/forgot_password/verify_code";
import SetNewPassword from "../modules/Auth/pages/forgot_password/set_new_password";

// CUSTOMER pages 
import Home from "../modules/customer/pages/Home/home";
import Shop from "../modules/customer/pages/Shop/shop";
import SingleProduct from "../modules/customer/pages/SingleProduct/SingleProduct";
import ProductComparison from "../modules/customer/pages/ProductComparison/ProductComparison";
import Cart from "../modules/customer/pages/Cart/Cart";
import Checkout from "../modules/customer/pages/Checkout/Checkout";
import Contact from "../modules/customer/pages/Contact/Contact";
import Blog from "../modules/customer/pages/Blog/Blog";

export default function AppRoutes() {
  return (
    <Routes>
      {/* AUTH */}
      <Route element={<AuthLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/verifycode" element={<VerifyCode />} />
        <Route path="/setnewpassword" element={<SetNewPassword />} />
      </Route>

      {/* CUSTOMER */}
      <Route element={<CustomerLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/product/:sku" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/comparison" element={<ProductComparison />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Route>

      {/* ADMIN */}
      <Route path="/admin" element={<AdminLayout />}>
      </Route>

      {/* 404 đơn giản */}
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}
