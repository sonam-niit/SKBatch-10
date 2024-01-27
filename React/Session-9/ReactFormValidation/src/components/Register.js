import React, { useState } from 'react';

function Register() {
    const [user, setUser] = useState({ name: '', username: '', email: '', password: '' });
    const [validationErrors, setValidationErrors] = useState({})

    const validateForm = () => {
        const emailRegex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const errors = {};
        if (!user.name) {
            errors.name = "Name is Required";
        }
        if (!user.username) {
            errors.username = "UserName is Required";
        }
        if (!user.email) {
            errors.email = "Email is Required";
        }else if(!emailRegex.test(user.email)){
            errors.email = "Email is not valid";
        }
        if (!user.password) {
            errors.password = "Password is Required";
        }else if(user.password.length<8){
            errors.password="Password Must be 8 characters Long"
        }
        return errors;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            setValidationErrors({});
            console.log(user);
            alert("Form is submitted for the apprival")
        } else {
            setValidationErrors(errors);//update the state with errors
        }
    }
    return (
        <div className='row mt-3'>
            <div className='col'>
                <img src='https://img.freepik.com/free-psd/modern-dynamic-instagram-post-feed-template_125755-401.jpg'
                    height="500" alt='banner Image' />
            </div>
            <form className='col' onSubmit={handleSubmit} noValidate>
                <h3 className='text-center text-bg-info p-3'>Registration Form</h3>
                <div className={`form-group mb-3 ${validationErrors.name ? 'has-error' : ''}`}>
                    <label>Name</label>
                    <input type='text' className={`form-control ${validationErrors.name ? 'is-invalid' : ''}`}
                        value={user.name}
                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                        name='name' />
                    {validationErrors.name && <div className='invalid-feedback'>
                        {validationErrors.name}
                    </div>}
                </div>
                <div className={`form-group mb-3 ${validationErrors.username ? 'has-error' : ''}`}>
                    <label>UserName</label>
                    <input type='text' className={`form-control ${validationErrors.username ? 'is-invalid' : ''}`}
                        value={user.username}
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                        name='username' />
                    {validationErrors.username && <div className='invalid-feedback'>
                        {validationErrors.username}
                    </div>}
                </div>
                <div className={`form-group mb-3 ${validationErrors.email ? 'has-error' : ''}`}>
                    <label>Email</label>
                    <input type='email' className={`form-control ${validationErrors.email ? 'is-invalid' : ''}`}
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        name='email' />
                    {validationErrors.email && <div className='invalid-feedback'>
                        {validationErrors.email}
                    </div>}
                </div>
                <div className={`form-group mb-3 ${validationErrors.password ? 'has-error' : ''}`}>
                    <label>Password</label>
                    <input type='password' className={`form-control ${validationErrors.password ? 'is-invalid' : ''}`}
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        name='password' />
                    {validationErrors.password && <div className='invalid-feedback'>
                        {validationErrors.password}
                    </div>}
                </div>
                <button type='submit' className='btn btn-primary w-100'>Register</button>
            </form>
        </div>
    );
}

export default Register;