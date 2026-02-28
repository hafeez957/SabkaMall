import React from 'react'
import Navbar from '../Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Products from '../Products'
import ViewMore from '../ViewMore'

const AdminPortal = () => {
  return (
    < >
      <Navbar/>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Products/>} path='/products'/>     
        <Route element={<ViewMore/>} path='/viewmore/:id'/>     
      </Routes>
    </ >
  )
}

export default AdminPortal
