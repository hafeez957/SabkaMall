import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import AdminPortal from './Components/Admin/AdminPortal'
import UserPortal from './Components/User/UserPortal'
import { ToastContainer } from 'react-toastify'


const App = () => {
  return (
    < >
       
        {/* <Navbar/> */}
        <ToastContainer autoClose={2000}/>
        <Routes>
          <Route element={<LandingPage/>} path='/'/>
            <Route element={<AdminPortal/>} path='/adminportal/*'/>
            <Route element={<UserPortal/>} path='/userportal/*'/>
        </Routes>
       
    </ >
  )
}

export default App
