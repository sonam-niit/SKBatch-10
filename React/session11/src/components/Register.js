import React from 'react';
import { useNavigate } from 'react-router-dom';
function Register() {

    const navigate= useNavigate();
    const handleSubmit=(event)=>{
        event.preventDefault();
        alert("Your Registered Successfully try to login..!!");
        navigate("/login");
    }
    return ( 
        <div className='container'>
            <h3 className='text-center p-3'>Register Form</h3>
            <form className='mt-3' onSubmit={handleSubmit}>
                <div className='form-group mb-3'>
                    <label>Name</label>
                    <input type='text' placeholder='John Doe' className='form-control'/>
                </div>
                <div className='form-group mb-3'>
                    <label>UserName</label>
                    <input type='text' placeholder='JohnDoe1' className='form-control'/>
                </div>
                <div className='form-group mb-3'>
                    <label>Email</label>
                    <input type='email' placeholder='john.doe@gmail.com' className='form-control'/>
                </div>
                <div className='form-group mb-3'>
                    <label>Password</label>
                    <input type='password' placeholder='********' className='form-control'/>
                </div>
                <button type='submit' className='btn btn-primary w-100'>Register</button>
            </form>
        </div>
     );
}

export default Register;