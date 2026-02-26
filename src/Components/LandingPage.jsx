import React, { useState } from 'react'
import '../assets/styles/landingpage.css'
import AdminLogin from './Admin/AdminLogin'
import UserLogin from './User/UserLogin'


const LandingPage = () => {
    let[bool,setBool]=useState(true)
    let handleButton=()=>{
        setBool(!bool)
    }
  return (
    <>
        <div className="landingpage">
            <div className="container">
                <div className="head">
                    <h2>{bool?'Admin login':'User Login'}</h2>
                    <div className="btn">
                        <button onClick={handleButton} className={bool?'left':'right'}>{bool?'Admin':'User'}</button>
                    </div>
                </div>
                {bool?<AdminLogin></AdminLogin>:<UserLogin/>}
                
            </div>
        </div>
    </>
  )
}

export default LandingPage