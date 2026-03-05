import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import '../../assets/styles/product.css'

const Cart = () => {

    let [cartData,setCartData]=useState([])

    let fetchCart=async ()=>{
        let data = await axios.get('http://localhost:4000/cart')
        setCartData(data.data)
    }

    useEffect(()=>{
        fetchCart()
    })
  return (
    <>
      <div className="cart">
        {cartData.map((ele)=>{
            let {id,title,image,price,description,category,rating}=ele
            
            return(
                 <>
                {/* <span className='icon' onClick={handlenavigate}><CloseIcon/></span> */}
        <div className="cart-card">
                 <h1>{title}</h1>
            <img src={image} alt="" />
            <div className="info">
            <p><span>Category :</span> : {category}</p>
            <p> <span>Description:</span> {description}</p>
             <button>Rs. {price*90} /-</button> 
             <p>Rating: <span>{rating && rating.rate} / 5 </span><br/>
               based on {rating && rating.count} ratings by Verified Users</p>
            </div>
          </div>
                 </>
            )
        })}
       </div>
    </>
  )
}

export default Cart
