import { useContext } from "react";
import { Outlet } from "react-router-dom";

import Header from "../modules/customer/pages/Home/Header";
import Footer from "../modules/customer/pages/Home/Footer";
import CartSidebar from "../modules/customer/pages/CartSidebar/CartSidebar";

import { CartContext } from "../contexts/CartContext";

export default function CustomerLayout() {
  const { isCartOpen, toggleCart, closeCart } = useContext(CartContext);

  return (
    <>
      <Header toggleCart={toggleCart} />
      {isCartOpen && <CartSidebar onClose={closeCart} />}

      <Outlet />

      <Footer />
    </>
  );
}
