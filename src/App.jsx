import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Footer from './pages/Home/Footer'
import Header from './pages/Home/Header'
import Home from './pages/Home/home'
import Shop from './pages/Shop/shop'
import SingleProduct from './pages/SingleProduct/SingleProduct'
import ProductComparison from './pages/ProductComparison/ProductComparison'
import CartSidebar from "./pages/CartSidebar/CartSidebar";
import Cart from "./pages/Cart/Cart";
function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Header onOpenCart={() => setIsCartOpen(true)} />
        {isCartOpen && <CartSidebar onClose={() => setIsCartOpen(false)} />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
