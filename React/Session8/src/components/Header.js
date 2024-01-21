import React from 'react';
import { useAuthContext } from './AuthContext';
function Header() {
    const {isLoggedIn,user,
        setIsLoggedIn,setUser}= useAuthContext();//consume

    const handleClick=()=>{
        if(isLoggedIn){
            alert("Logged out Successfully")
            setIsLoggedIn(false);
            setUser(null);
        }
    }
    return ( 
        <div>
            <h2>Header Comp</h2>
            <button onClick={handleClick}>{isLoggedIn?'Logout':'Login'}</button>
            {isLoggedIn && <h4>Welcome {user.name}</h4>}
        </div>
     );
}

export default Header;