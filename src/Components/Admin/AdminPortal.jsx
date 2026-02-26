import React from 'react'
import Navbar from '../Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Products from '../Products'

const AdminPortal = () => {
  return (
    < >
      <Navbar/>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Products/>} path='/products'/>
      </Routes>
    </ >
  )
}

export default AdminPortal
