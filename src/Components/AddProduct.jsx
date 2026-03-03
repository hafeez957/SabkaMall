import React, { useState } from 'react'
import '../assets/styles/addproduct.css'
import { Description } from '@mui/icons-material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
  let [newProduct,setNewProduct]=useState({
    title:"",
    price:"",
    description:"",
    category:"",
    image:"",
    rating:{
      rate:"",
      count:""
    }
  })

  let handleInput=(e)=>{
    // setNewProduct({...newProduct,[e.target.name]:e.target.value})

    if(e.target.name==='rate'||e.target.name==='count'){
      setNewProduct({
        ...newProduct,
        rating:{

          ...newProduct.rating,
          [e.target.name]:e.target.value
        },
        })
    }else{
      setNewProduct({...newProduct,[e.target.name]:e.target.value})

    }
  }

  let navigate =useNavigate()

  console.log(newProduct);
  let handleSubmit=(e)=>{
    e.preventDefault()
    console.log(newProduct)
    let bool=confirm("Do you want to add this product?")
    if(bool){
      axios.post("http://localhost:4000/products",  newProduct)
      alert("Product added successfully")
      navigate('/adminportal/products')
    }else{
      alert("Product not added")

    }

    setNewProduct({
    title:"",
    price:"",
    description:"",
    category:"",
    image:"",
    rating:{
      rate:"",
      count:""
    }
  })
}

  
  return (
    < >
      <div className="add-product">
        <div className="formbox" onSubmit={handleSubmit}>
          <form action="">
            <input type="text" placeholder='Enter title' name='title' onChange={handleInput} value={newProduct.title}/>
            <input type="number" placeholder='Enter price' name='price' onChange={handleInput} value={newProduct.price}/>
            <input type="text" placeholder='Enter description'name='description' onChange={handleInput}  value={newProduct.description}/>
             <select id="" onChange={handleInput} name='category'>
              <option value="">Select Category</option>
              <option value="men's clothing">men's clothing</option>
              <option value="women's clothing">women's clothing</option>
              <option value="electronics">electronics</option>
              <option value="jewelery">jewelery</option>
             </select>
            <input type="text" placeholder='Enter image url' name='image' onChange={handleInput} value={newProduct.image}/>
            <input type="number" placeholder='Enter rating' min='0' max='5' name='rate' onChange={handleInput} value={newProduct.rating.rate} />
            <input type="number" placeholder='Enter rating count' name='count' onChange={handleInput} value={newProduct.rating.count} />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </ >
  )
}

export default AddProduct
