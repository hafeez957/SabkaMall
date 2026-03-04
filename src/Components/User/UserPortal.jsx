import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserHome from './Cart'
import Products from '../Products'

const UserPortal = () => {
  return (
    < >
      <Routes>
        <Route element={<Products/>} path='/' />
      </Routes>
    </ >
  )
}

export default UserPortal
