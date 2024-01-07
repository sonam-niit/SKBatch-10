import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormData() {

    const [user,setUser]= useState({name:'',userName:'',email:'',password:''});

    const handleChange=(e)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(user);
        //call backend POST API for Registration
        alert("User registered Successfully");
        setUser({name:'',userName:'',email:'',password:''});
    }
    return (
        <div>
            <h1>Full Name Demo</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="fname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Full Name"
                        name="name"
                        value={user.name}
                        onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="lname">
                    <Form.Label>UserName</Form.Label>
                    <Form.Control type="text" 
                    placeholder="User Name" 
                    value={user.userName}
                    name="userName"
                    onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" 
                    placeholder="email" 
                    value={user.email}
                    name="email"
                    onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder='Secret'
                        value={user.password}
                        name="password"
                        onChange={handleChange}
                    />
                    <Form.Text id="passwordHelpBlock" muted>
                        Your password must be 8-20 characters long, contain letters and numbers,
                        and must not contain spaces, special characters, or emoji.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" className="w-100" type="submit"> Register</Button>{' '}
            </Form>
            
        </div>
    );
}

export default FormData;