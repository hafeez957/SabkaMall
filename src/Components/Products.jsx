import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../assets/styles/products.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import ReadMoreIcon from '@mui/icons-material/ReadMore';

const Products = () => {
  let [products, setProducts] = useState([])
  let [filtered_data, setFiltered_data] = useState([])
  let fetchApi = async () => {
    let data = await axios.get("http://localhost:4000/products")
    setProducts(data.data);
    setFiltered_data(data.data)
  }

  useEffect(() => {
    fetchApi()
  },[])

  let handleCategory=(e)=>{
    let temp=(e.target.innerText).toLowerCase()
    let filtered_products=products.filter((ele)=>{
      if(temp==="all"){
        return products
      }
      return ele.category===temp
    })
    setFiltered_data(filtered_products)
  }


  // console.log(filtered_products);

  let navigate=useNavigate()


  let handleDetails=(id)=>{
    navigate(`/adminportal/viewmore/${id}`)
  }

  let handleDelete=(id)=>{
   let bool= confirm("Do you want to delete this product?")
    if(bool){
      axios.delete(`http://localhost:4000/products/${id}`)
      alert("Product is deleted")
      window.location.reload()
    }else{

      alert("Product is not deleted")
    }
  }
  return (
    < >

      
      <div className="products">
      <h1>Products</h1>

        <div className="category">
          <ul>
            <li><button onClick={handleCategory}>All</button></li>
            <li><button onClick={handleCategory}>Men's clothing</button></li>
            <li><button onClick={handleCategory}>Women's clothing</button></li>
            <li><button onClick={handleCategory}>Jewelery</button></li>
            <li><button onClick={handleCategory}>Electronics</button></li>
          </ul>
        </div>
        {
        
        
        filtered_data.map((ele) => {
        let {id,title,price,description,image}=ele;
        return(
          <div className="card">
            <h4>{title}</h4>
            <img src={image} alt="" />
            {/* <p>{description}</p> */}
             <button>Rs. {price*90}/-</button> 
            <div className="info">
              <button onClick={()=>{handleDetails(id)}} >View More</button>
            <button onClick={()=>{handleDelete(id)}}><DeleteIcon/></button>
            </div>
          </div>
        )
      })
      }
      </div>
    </ >
  )
}

export default Products
