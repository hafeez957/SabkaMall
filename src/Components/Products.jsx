import axios from 'axios'
import React, { useEffect } from 'react'

const Products = () => {
  let fetchApi=async ()=>{
    let data=await axios.get("http://localhost:4000/products")
    console.log(data);
    
  }

  useEffect(()=>{
    fetchApi()
  },[])
  
  return (
    < >
      <h1>Products</h1>
    </ >
  )
}

export default Products
