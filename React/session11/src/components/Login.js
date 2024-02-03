import React from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigate= useNavigate();
    const handleSubmit=(event)=>{
        event.preventDefault();
        alert("You LoogedIn Successfully redirecting you to dashboard..!!");
        navigate("/dashboard");
    }
    return ( 
        <div className='container'>
            <h3 className='text-center p-3'>Login Form</h3>
            <form className='mt-3' onSubmit={handleSubmit}>
                <div className='form-group mb-3'>
                    <label>Email</label>
                    <input type='email' placeholder='john.doe@gmail.com' className='form-control'/>
                </div>
                <div className='form-group mb-3'>
                    <label>Password</label>
                    <input type='password' placeholder='********' className='form-control'/>
                </div>
                <button type='submit' className='btn btn-primary w-100'>Login</button>
            </form>
        </div>
     );
}

export default Login;