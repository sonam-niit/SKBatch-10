import React from 'react';
import './Header.css';
function Header() {
    return ( 
        <nav>
            <ul className='nav'>
                <li className='item'>
                    <a href="#" className='link'>Home</a>
                </li>
                <li className='item'>
                    <a href="#" className='link'>About</a>
                </li>
                <li className='item'>
                    <a href="#" className='link'>Contact</a>
                </li>
            </ul>
            <hr/>
        </nav>
     );
}

export default Header;