import React from "react";

function Demo() {

    const name="Sonam Soni";
    const company="SKill Academy";
    const isLoggedIn=true;
    return (
        <>
            <h1>Hello {name}</h1>
            <h3>Welcome to {company}</h3>

            {
                isLoggedIn ? <p>Welcome Back..! You are Logged In</p>
                    : <p>Please Login to access the content</p>
            }

            <button>{isLoggedIn ? 'Logout' : 'Login'}</button>
        </>

        // React Fragment
    )
}

export default Demo;