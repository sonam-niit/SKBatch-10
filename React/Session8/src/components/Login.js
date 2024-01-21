import React, { useState } from 'react';
import { useAuthContext } from './AuthContext';
function Login() {

    const [name,setName]=useState('');
    const { setIsLoggedIn, setUser } = useAuthContext();
    const handlelogin = () => {
        setIsLoggedIn(true);
        setUser({ name});
        alert('User LoggedIn Successfully')
        setName('')
    }
    return (
        <div>
            <h2>Login Compo</h2>
            <input type='text' value={name} placeholder='Enter your name'
            onChange={(e)=>setName(e.target.value)} />
            <button onClick={handlelogin}>Login</button>
        </div>
    );
}

export default Login;