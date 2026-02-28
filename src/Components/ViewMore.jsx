import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../assets/styles/products.css'
import CloseIcon from '@mui/icons-material/Close';

const ViewMore = () => {
    let params=useParams()
    console.log(params.id);

    let [card,setCard]=useState({})

    let singleData=async()=>{
        let data=await axios.get(`http://localhost:4000/products/${params.id}`)
    console.log(data)
    setCard(data.data)
    }
    useEffect(()=>{
        singleData()
    },[])
    console.log(card)

    let {title,image,price,description,category,rating}=card
  return (
    < >
       <div className="viewmore">
                <h1>{title}</h1>
                <span className='icon'><CloseIcon/></span>
        <div className="card">
            <img src={image} alt="" />
            <div className="info">
            <p><span>Category :</span> : {category}</p>
            <p> <span>Description:</span> {description}</p>
             <button>Rs. {price*90} /-</button> 
             <p>Rating: <span>{rating && rating.rate} / 5 </span><br/>
               based on {rating && rating.count} ratings by Verified Users</p>
            </div>
          </div>
       </div>
    </ >
  )
}

export default ViewMore
