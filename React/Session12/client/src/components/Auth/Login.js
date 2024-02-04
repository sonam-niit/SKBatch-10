import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {
    const [user,setUser]=useState({email:'',password:''});
    const navigate= useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const resp= await axios.post("http://localhost:5000/api/auth/login",user);
            if(resp.status===200){
                toast.success(resp.data.message);
                localStorage.setItem('token',resp.data.token);
                navigate('/dashboard');
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    return ( 
        <div>
            <h3>Login Form</h3>
            <form onSubmit={handleSubmit}>
                <div className='form-group mb-3'>
                    <label>Email</label>
                    <input type='email' placeholder='Enter Email' value={user.email}
                    onChange={(e)=>setUser({...user,email:e.target.value})}
                    className='form-control' />
                </div>
                <div className='form-group mb-3'>
                    <label>Password</label>
                    <input type='password' placeholder='Enter Password' value={user.password}
                    onChange={(e)=>setUser({...user,password:e.target.value})}
                    className='form-control' />
                </div>
                <button type='submit' className='btn btn-primary'>Login</button>
            </form>
        </div>
     );
}

export default Login;