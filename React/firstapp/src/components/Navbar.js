import React from 'react';
function Navbar() {
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Grocery</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Mobiles</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Fashion
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Men's Fashion</a></li>
                    <li><a className="dropdown-item" href="#">Women's Fashion</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Kids</a></li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Electronics
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Men's Fashion</a></li>
                    <li><a className="dropdown-item" href="#">Women's Fashion</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Kids</a></li>
                </ul>
            </li>
            
        </ul>
    );
}

export default Navbar;