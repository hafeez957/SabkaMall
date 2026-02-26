import React from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/styles/navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import logo from '../assets/images/logo.png'

const Navbar = () => {
  return (
    < >
      <div className="navbar">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="search">
            <input type="search" name="" id="" />
            <button className='icon'><SearchIcon/></button>
        </div>
        <div className="links">
            <ul>
                <li><NavLink className={'link'} to={'/adminportal/'}>Home</NavLink></li>
                <li><NavLink className={'link'} to={'/adminportal/products'}>Products</NavLink></li>
                <li><NavLink className={'link'}>Add products</NavLink></li>
                <li><NavLink className={'link'}>Users</NavLink></li>
                <li><NavLink className={'link'}>Add Users</NavLink></li>
                <li><NavLink>Logout</NavLink></li>
            </ul>
        </div>
      </div>
    </ >
  )
}

export default Navbar
