import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import '../assets/styles/navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import logo from '../assets/images/logo.png'

const Navbar = () => {
  let location=useLocation()
  let bool=location.pathname.startsWith('/adminportal');
  
  return (
    < >
      <div className="navbar">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="search">
            <input type="search" name="" id="" placeholder='Search Products'/>
            <button className='icon'><SearchIcon/></button>
        </div>
        <div className="links">
            {bool?<ul>
                <li><NavLink className={'link'} to={'/adminportal/'}>Home</NavLink></li>
                <li><NavLink className={'link'} to={'/adminportal/products'}>Products</NavLink></li>
                <li><NavLink className={'link'} to={'/adminportal/addproduct'}>Add products</NavLink></li>
                <li><NavLink className={'link'} to={'/adminportal/users'}>Users</NavLink></li>
                <li><NavLink className={'link'} to={'/adminportal/addusers'}>Add Users</NavLink></li>
                <li><NavLink>Logout</NavLink></li>
            </ul>:<ul>
                <li><NavLink className={'link'} to={'/userportal'}>Home</NavLink></li>
                <li><NavLink className={'link'} to={'/userportal/products'}>Products</NavLink></li>
                <li><NavLink className={'link'} to={'/userportal/about '}>About us</NavLink></li>
                <li><NavLink className={'link'} to={'/userportal/help '}>Help</NavLink></li>
                <li><NavLink>Logout</NavLink></li>
            </ul>}
        </div>
      </div>
    </ >
  )
}

export default Navbar
