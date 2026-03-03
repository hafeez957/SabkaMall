import React from 'react'
import '../assets/styles/home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  let navigate=useNavigate()
  let handleProduct=()=>{
    navigate('/adminportal/addproduct')
  }
  let handleUser=()=>{
    navigate('/adminportal/addusers')
  }
  let handleProducts=()=>{
    navigate('/adminportal/products')
  }
  let handleUsers=()=>{
    navigate('/adminportal/users')
  }
  return (
    < >
      <div className="dashboard">

      {/* Welcome Section */}
      <div className="welcome">
        <h1>Welcome Back, Admin 👋</h1>
        <p>Manage your users and products efficiently.</p>
      </div>

       

      {/* Quick Actions */}
      <div className="actions">
        <div className="action-card">
          <h3>Add New Product</h3>
          <button onClick={handleProduct}>Add Product</button>
        </div>

        <div className="action-card">
          <h3>Add New User</h3>
          <button onClick={handleUser}>Add User</button>
        </div>
      </div>
      <div className="actions">
        <div className="action-card">
          <h3>View All Products</h3>
          <button onClick={handleProducts}>View Products</button>
        </div>

        <div className="action-card">
          <h3>View All Users</h3>
          <button onClick={handleUsers}>View Users</button>
        </div>
      </div>

       

    </div>
    </>
  )
}

export default Home