import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../assets/styles/products.css'
import { Link, NavLink } from 'react-router-dom'

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
        let {title,price,description,image}=ele;
        return(
          <div className="card">
            <h4>{title}</h4>
            <img src={image} alt="" />
            {/* <p>{description}</p> */}
             <button>${price}</button> 
            <div className="info">
              <button>View More</button>
            <button>Delete</button>
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
