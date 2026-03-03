import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const Users = () => {
    let [users,setUsers]=useState([])
    let handleApi=async ()=>{
        let usersData=await axios.get("http://localhost:4000/users")
        console.log(usersData.data);
        // let data=usersData.data
        // console.log(data.data);
        setUsers(usersData.data)
        
    }

    useEffect(()=>{
        handleApi()
    },[])
    console.log(users)

    let handleDelete=(id)=>{
        console.log(id)
        let bool=confirm("Do you want to delete this user?")
        if(bool){
            axios.delete(`http://localhost:4000/users/${id}`)
            alert("User deleted successfully")
            window.location.reload()
        }else{
            alert("User not deleted")
        }
    }
    
  return (
    < >
      <div className="users">
      <h1>Users</h1>
         <table>
            <thead>
                <tr>
                    <th>Slno</th>
                    <th>UserName</th>
                    <th>Mobile Number</th>
                    <th>Email</th>
                    <th>Date Of Birth</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                users.map((ele,ind)=>{
                    let {id,username,mobile,email,dob}=ele

                    return(
                        <tr>
                            <td> {ind+1}  </td>
                            <td>{username}  </td>
                            <td> {mobile} </td>
                            <td> {email} </td>
                            <td> {dob} </td>
                            <td>  <button className="delete" onClick={()=>{handleDelete(id)}}><DeleteIcon/></button> </td>
                        </tr>
                    )
                })
            }
            </tbody>
         </table>

      </div>
    </>
  )
}

export default Users
