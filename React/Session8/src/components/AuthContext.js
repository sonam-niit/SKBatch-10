import React from 'react';
import { createContext, useContext, useState } from "react";

const AuthContext= createContext();

function AuthProvider({children}) {
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const [user,setUser]=useState(null);

    return ( 
        <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn,user,setUser}}>
            {children}
        </AuthContext.Provider>
     );
}

export default AuthProvider;

export const useAuthContext=()=>{
    return useContext(AuthContext);
}