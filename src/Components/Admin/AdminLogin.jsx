import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


const AdminLogin = () => {

    let navigate = useNavigate()
    let [bool, setBool] = useState(true)

    let [formdata, setFormdata] = useState({ email: "", password: "" })
    let errMsz = useRef()
    let handleInput = (e) => {
        let keyname = e.target.name
        let keyvalue = e.target.value
        // console.log(keyname,keyvalue);
        setFormdata({ ...formdata, [keyname]: keyvalue })
        // console.log(formdata);


    }
    let handleSubmit = (e) => {
        e.preventDefault()
        // console.log(formdata)
        // collecting data from form input feild
        let { email, password } = formdata
        // admin credientials
        let credientials = {
            adminMail: 'admin@gmail.com',
            adminpswd: '1234'
        }
        let { adminMail, adminpswd } = credientials

        //check input data and credientials
        if (adminMail == email && adminpswd == password) {
            alert('login success')
            navigate('/adminportal')
            setFormdata('')
        } else {
            let err = `solid 1px red`
            e.target[0].style.border = err
            e.target[1].style.border = err
            errMsz.current.innerText = `email or password is invalid`

        }
    }

    let togglePassword=()=>{
        setBool(!bool)
    }
    return (
        <>
            <div className="admin_login">
                <div className="formbox">
                    <form onSubmit={handleSubmit}>

                        <input
                            onChange={handleInput}
                            name="email"
                            value={formdata.email}
                            type="email"
                            placeholder="enter email"
                        />
                        <div style={{ position: "relative", width: "100%" }}>
                            <input
                                onChange={handleInput}
                                name="password"
                                value={formdata.password}
                                type={bool?'password':'text'}
                                placeholder="enter password"
                                style={{ width: "100%"}}
                            />

                            {bool? <VisibilityIcon
                                    style={{
                                    position: "absolute",
                                    right: "10px",
                                    top: "20%",
                                    cursor: "pointer"
                                    }}
                                    onClick={togglePassword}
                            />: <VisibilityOffIcon
                                    style={{
                                    position: "absolute",
                                    right: "10px",
                                    top: "20%",
                                    cursor: "pointer"
                                    }}
                                    onClick={togglePassword}
                                />}
                            
                            

                        </div>

                        <span ref={errMsz} style={{ color: "red", fontSize: "small" }}></span>

                        <button style={{ marginTop: "10px" }}>Admin Login</button>

                    </form>
                    <Link>Forget Password</Link>
                </div>
            </div>

        </>
    )
}

export default AdminLogin