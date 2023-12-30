import React from 'react';
function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark"  data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg'
                    alt='logo'/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search"
                            placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <div>
                        <button className='btn btn-primary ms-3'>Login</button>
                        <button className='btn btn-secondary ms-3'>Cart</button>
                        <button className='btn btn-warning ms-3'>Become A Seller</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;