import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FullName() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        setFullName(firstName+" "+lastName);
        setFirstName('');
        setLastName('');
    }
    return (
        <div>
            <h1>Full Name Demo</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="fname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="first Name" 
                    value={firstName}
                    onChange={(e)=>setFirstName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="lname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" value={lastName}
                    onChange={(e)=>setLastName(e.target.value)} />
                </Form.Group>
                <Button variant="primary" className="w-100" type="submit"> Show FullName</Button>{' '}
            </Form>
            <h3 className="mt-3 text-center">Welcome {fullName}</h3>
        </div>
    );
}

export default FullName;