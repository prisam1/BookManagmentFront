import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const forsubmit = async () => {


        let result = await fetch("http://localhost:5000/user", {
            method: "Post",
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json()

        localStorage.setItem('user',JSON.stringify(result.user))
        localStorage.setItem('token',JSON.stringify(result.auth))
        navigate('/login')

    }

    return (
        <>
            <div className="container w-25">

                <div className="form-group mt-2">

                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Enter Name" />

                </div>
                <div className="form-group mt-2">

                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group mt-2">

                    <input type="password" className="form-control" required value={password} onChange={(e) => setPassword(e.target.value)} id="exampleInputPassword1" placeholder="Password" />
                </div>

                <button type="submit" onClick={forsubmit} className="btn btn-primary w-100 mt-2">Submit</button>

            </div>

        </>
    )
}
export default Signup;