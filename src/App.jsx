import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import AdminPortal from './Components/Admin/AdminPortal'


const App = () => {
  return (
    < >
       
        {/* <Navbar/> */}
        <Routes>
          <Route element={<LandingPage/>} path='/'/>
            <Route element={<AdminPortal/>} path='/adminportal/*'/>
        </Routes>
       
    </ >
  )
}

export default App
