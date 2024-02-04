import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Register() {
    const [user,setUser]=useState({name:'',username:'',email:'',password:''});
    const navigate= useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const resp= await axios.post("http://localhost:5000/api/auth/register",user);
            console.log(resp);
            if(resp.status==201){
                toast.success(resp.data.message);
                navigate('/login')
            }
        } catch (error) {
            toast.error(error.response.data.message)
            console.log(error);
        }
    }
    return ( 
        <div>
            <h3>Registration Form</h3>
            <form onSubmit={handleSubmit}>
                <div className='form-group mb-3'>
                    <label>Name</label>
                    <input type='text' placeholder='Enter Name' value={user.name}
                    onChange={(e)=>setUser({...user,name:e.target.value})}
                    className='form-control' />
                </div>
                <div className='form-group mb-3'>
                    <label>UserName</label>
                    <input type='text' placeholder='Enter UserName' value={user.username}
                    onChange={(e)=>setUser({...user,username:e.target.value})}
                    className='form-control' />
                </div>
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
                <button type='submit' className='btn btn-primary'>Register</button>
            </form>
        </div>
     );
}

export default Register;