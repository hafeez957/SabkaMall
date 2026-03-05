import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import UserHome from './Cart'
import Products from '../Products'
import ViewMore from '../ViewMore'
import Users from '../Admin/Users'
import Navbar from '../Navbar'
import About from './About'
import Help from './Help'
import Cart from './Cart'

const UserPortal = () => {
  return (
    < >
    <Navbar/>
      <Routes>
        <Route element={<Products/>} path='/products' />
        <Route element={<ViewMore/>} path='/viewmore/:id' />
        <Route element={<Cart/>} path='/cart' />
        <Route element={<About/>} path='/about' />
        <Route element={<Help/>} path='/help' />
      </Routes>
    </ >
  )
}

export default UserPortal
