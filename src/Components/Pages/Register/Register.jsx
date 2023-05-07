import { useState } from 'react';
import {Link,useNavigate } from 'react-router-dom'
import axios from 'axios';


export default function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function RegisterUser(ev){
        ev.preventDefault();
        try{
            const data = await axios.post('/user/register',{name,email,password});
            console.log(data);
            if(data){
                alert('Successfully login');
                navigate('/')
            }else{
                alert('Something went wrong');
            }
        }catch(err){
            alert(err)
        }
        }

    return (
        <div className="container" style={{ marginLeft: '500px', marginTop: '150px' }}>
            <form onSubmit={RegisterUser}>
                <h1>Register</h1>
                <div className="form-group">
                    <label style={{ marginTop: '20px' }}>Name</label>
                    <input type="text" className="form-control" style={{ width: 800 }} placeholder="Name" required
                    value={name} onChange={ev => setName(ev.target.value)} />
                </div>
                <div className="form-group">
                    <label style={{ marginTop: '10px' }}>Email address</label>
                    <input type="email" className="form-control" style={{ width: 800 }} placeholder="Enter email" required
                    value={email} onChange={ev => setEmail(ev.target.value)}/>
                </div>
                <div className="form-group">
                    <label style={{ marginTop: '10px' }}>Password</label>
                    <input type="password" className="form-control" style={{ width: 800 }} placeholder="Password" required
                    value={password} onChange={ev =>setPassword(ev.target.value)}/>
                </div>
                <button style={{ marginTop: '20px' }} type='submit' className="btn btn-primary text-lg-center">Register</button>
                <div>
                    Already member? <Link to={'/'}>Login</Link>
                </div>
            </form>
        </div>
    )
}