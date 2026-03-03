import React, { useState } from 'react'
import '../../assets/styles/adduser.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddUser = () => {

    let navigate=useNavigate()

    let [userData,setUserData]=useState({
        username:'',
        mobile:'',
        email:'',
        password:'',
        dob:''
    })
    let handleInput=(e)=>{
        let keyname=e.target.name;
        let keyvalue=e.target.value;

        setUserData(
            {...userData,[keyname]:keyvalue}
        )
        
    }
    
    let handleSubmit=(e)=>{
        e.preventDefault()
        console.log(userData);
        let bool=confirm(`Do you want to add ${userData.username} user?`)
        if(bool){
            alert("user added successfully")
            axios.post("http://localhost:4000/users",userData)
            navigate('/adminportal/users')
        }else{
            alert("user not added")
        }
        setUserData({
        username:'',
        mobile:'',
        email:'',
        password:'',
        dob:''
    })
    }
  return (
     <>
     <div className="formbox">
        <h1>Add New User</h1>
        <div className="form">
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter your username' onChange={handleInput} name='username' value={userData.username}/>
                <input type="tel" id="" placeholder='Enter your phone number' onChange={handleInput} name='mobile' value={userData.mobile}/>
                <input type="email" id="" placeholder='Enter your email' onChange={handleInput} name='email' value={userData.email}/>
                <input type="password" id="" placeholder='Enter your password ' onChange={handleInput} name='password' value={userData.password}/>
                <input type="date" id="" placeholder=' Date of birth' onChange={handleInput} name='dob' value={userData.dob}/>
                <button>Add User</button>
            </form>
        </div>
     </div>
     </>

  )
}

export default AddUser
