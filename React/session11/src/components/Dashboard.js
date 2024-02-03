import React from 'react';
import { Link, Outlet } from 'react-router-dom';
function Dashboard() {
    return ( 
        <div className='container'>
            <h3 className='mt-3'>Dashboard Component</h3>
            <ul className='nav nav-tabs'>
                <li className='nav-items'>
                    <Link className='nav-link' 
                    to="messages">Messages</Link>
                </li>
                <li className='nav-items'>
                    <Link className='nav-link' to="task">Tasks</Link>
                </li>
                <li className='nav-items'>
                    <Link className='nav-link' to="about">About</Link>
                </li>
            </ul>

            <Outlet /> 
            {/* To render Children Routes Here */}
        </div>
     );
}

export default Dashboard;