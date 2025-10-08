import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './pages/Home/Footer'
import Header from './pages/Home/Header'
import Home from './pages/Home/home'
import Shop from './pages/Shop/shop'
import SingleProduct from './pages/SingleProduct/SingleProduct'
function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<SingleProduct />} />
          <Route path='/shop' element={<Shop/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
