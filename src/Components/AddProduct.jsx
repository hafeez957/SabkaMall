import React, { useState } from 'react'
import '../assets/styles/addproduct.css'
import { Description } from '@mui/icons-material'
import axios from 'axios'

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
  console.log(newProduct);
  let handleSubmit=(e)=>{
    e.preventDefault()
    console.log(newProduct)
    axios.post("http://localhost:4000/products",  newProduct)

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
            <input type="text" placeholder='Enter Category' name='category' onChange={handleInput} value={newProduct.category}/>
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
