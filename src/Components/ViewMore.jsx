import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../assets/styles/products.css'
import CloseIcon from '@mui/icons-material/Close';

const ViewMore = () => {
  let params = useParams()
  console.log(params.id);

  let navigate = useNavigate()

  let [card, setCard] = useState({})

  let singleData = async () => {
    let data = await axios.get(`http://localhost:4000/products/${params.id}`)
    console.log(data)
    setCard(data.data)
  }
  useEffect(() => {
    singleData()
  }, [])
  console.log(card)

  let { id, title, image, price, description, category, rating } = card

  let handlenavigate = () => {
    navigate('../products')
  }

  let handleCart = async (id) => {
    let bool = confirm("Do you want to add this item to cart")
    if (bool) {
      let data = await axios.get(`http://localhost:4000/products/${id}`)
      console.log(data.data)
      console.log((data.data.id))
      axios.post('http://localhost:4000/cart', data.data)
      alert("Item added to cart")
      navigate('/userportal/cartitems')
    } else {
      alert("Item is not added to cart")
    }
  }
  return (
    < >
      <div className="viewmore">
        <h1>{title}</h1>
        <span className='icon' onClick={handlenavigate}><CloseIcon /></span>
        <div className="card">
          <img src={image} alt="" />
          <div className="info">
            <p><span>Category :</span> : {category}</p>
            <p> <span>Description:</span> {description}</p>
            <button>Rs. {price * 90} /-</button>
            <button onClick={() => { handleCart(id) }}>Add To Cart /-</button>
            <p>Rating: <span>{rating && rating.rate} / 5 </span><br />
              based on {rating && rating.count} ratings by Verified Users</p>
          </div>
        </div>
      </div>
    </ >
  )
}

export default ViewMore
