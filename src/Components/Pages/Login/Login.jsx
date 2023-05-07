import React, { useState } from "react";
import {Link,useNavigate} from 'react-router-dom'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../App.css'
import axios from 'axios'

export default function Login() {
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function LoginUser(ev){
        ev.preventDefault();
        try{
            await axios.post('/user/login',{email,password}).then((response) =>{
                alert("successfully login");
                navigate('dashboard')
            })
        }catch(err){
            throw err
        }
    }

    return (
        <div className="container" style={{paddingLeft:'300px', marginTop: '150px'}}>
            <form onSubmit={LoginUser}>
                <h1>Login</h1>
                <div className="form-group" style={{marginTop:'20px'}}>
                    <label style={{marginTop: '10px'}}>Email address</label>
                    <input type="email" className="form-control" style={{width:800}} placeholder="Enter email" required
                    value={email} onChange={ev => setEmail(ev.target.value)}/>
                </div>
                <div className="form-group">
                    <label style={{ marginTop: '10px' }}>Password</label>
                    <input type="password" className="form-control" style={{ width: 800 }} placeholder="Password" required
                    value={password} onChange={ev =>setPassword(ev.target.value)}/>
                </div>
                <button style={{marginTop: '20px'}}className="btn btn-primary text-lg-center">Submit</button>
                <div>
                    Need to Register <Link to={'/register'}>Register</Link>
                </div>
            </form>
        </div>
    );
}