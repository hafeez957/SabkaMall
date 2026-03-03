import React from 'react'
import Navbar from '../Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Products from '../Products'
import ViewMore from '../ViewMore'
import AddProduct from '../AddProduct'
import AddUser from './AddUser'
import Users from './Users'

const AdminPortal = () => {
  return (
    < >
      <Navbar/>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Products/>} path='/products'/>     
        <Route element={<ViewMore/>} path='/viewmore/:id'/>     
        <Route element={<AddProduct/>} path='/addproduct'/>     
        <Route element={<AddUser/>} path='/addusers'/>     
        <Route element={<Users/>} path='/users'/>     
      </Routes>
    </ >
  )
}

export default AdminPortal
