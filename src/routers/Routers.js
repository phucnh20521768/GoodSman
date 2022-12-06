import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import ProductDetails from '../pages/ProductDetails'
import Products from '../pages/Products'
import About from '../pages/About'

function Routers() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='home' />} />
      <Route path='home' element={<Home />} />
      <Route path='cart' element={<Cart />} />
      <Route path='products' element={<Products />} />
      <Route path='checkout' element={<Checkout />} />
      <Route path='products/:id' element={<ProductDetails />} />
      <Route path='about' element={<About />} />
    </Routes>
  )
}

export default Routers