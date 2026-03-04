import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const UsersLogin = () => {

  let [data,setData]=useState([])
  let [formData,setFormData]=useState({email:"",password:""})

  let navigate=useNavigate()

  let handleApi=async()=>{
    let data=await axios.get("http://localhost:4000/users")
    setData(data.data)
  }

  useEffect(()=>{
    handleApi()
  },[])

  console.log(data);

  let Allemail=data.map(email=>email.email)
  console.log(Allemail)
  let allpass=data.map(pass=>pass.password)
  console.log(allpass)

  let handleFormData=(e)=>{
    let keyname=e.target.name
    let keyvalue=e.target.value

    setFormData(
      {...formData,[keyname]:keyvalue}
    )
  }

  console.log(formData)

  
  let handleAuth=(e)=>{
    e.preventDefault()
    
    let {email,password}=formData
    let emailInd=Allemail.indexOf(email)

    if(Allemail.includes(email) && allpass[emailInd]!=-1){
      if(allpass[emailInd]===password){
      toast.success("successfully loged in")
      navigate('/userportal')
      }else{
        toast.error("Invalid password")
      }
    }else{
      toast.error("Incorrect email")
    }
  }
  
  return (
    <>
    <div className="users_login">
        <div className="formbox">
                    <form action="" onSubmit={handleAuth}>
                        <input type="email" placeholder='enter email' name='email' onChange={handleFormData}/>
                        <input type="password" placeholder='enter password' name='password' onChange={handleFormData}/>
                        <button>Users Login</button>
                    </form>
                    <Link>Forget Password</Link>
                </div>
    </div>
      
    </>
  )
}

export default UsersLogin