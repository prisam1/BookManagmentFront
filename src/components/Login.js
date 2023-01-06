import React from "react";
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const userhandle = async () => {
        let result = await fetch("http://localhost:5000/userlogin", {
            method: "Post",
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json',

            }
        })
        result = await result.json()

        console.log(result)
        JSON.stringify(result)
    
        if (result.auth) {
            localStorage.setItem('user', JSON.stringify(result.user))
            localStorage.setItem('token', JSON.stringify(result.auth))

            navigate('/')
        } else {
            alert("error")
        }

    }
    return (
        <>
            <div className="container-fluid  ">
                <div className="form-group w-25 mx-auto">
                    <input type="email" className="form-control mt-3 p-2" value={email} onChange={(e) => setEmail(e.target.value)} required id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <input type="password" className="form-control mt-3" required value={password} onChange={(e) => setPassword(e.target.value)} id="exampleInputPassword1" placeholder="Password" />
                
                <button type="submit" onClick={userhandle} className="btn btn-primary w-100 mt-3">Submit</button>   
                </div>
            </div>
        </>
    )
}
export default Login;