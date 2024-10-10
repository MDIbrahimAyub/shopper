import React from 'react'
import Navbar from './Components/navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup' 
import Hero from './Components/Hero/Hero'
import Popular from './Components/popular/Popular'
import Offer from './Components/offer/Offer'
import OurNewCollection from './Components/OurNewCollection/OurNewCollection'
import NewsSubscription from './Components/Newssubscription/NewsSubscription'
import Shop from './Pages/Shop'
import Footer from './Components/footer/Footer'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productID' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App