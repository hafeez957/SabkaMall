import React from 'react'
import { Link } from 'react-router-dom'


const UsersLogin = () => {
  return (
    <>
    <div className="users_login">
        <div className="formbox">
                    <form action="">
                        <input type="email" placeholder='enter email' />
                        <input type="password" placeholder='enter password' />
                        <button>Users Login</button>
                    </form>
                    <Link>Forget Password</Link>
                </div>
    </div>
      
    </>
  )
}

export default UsersLogin