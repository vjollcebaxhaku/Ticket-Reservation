import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    const navLinkStyle = {
        color: '#000', 
        fontSize: '16px',
        fontWeight: 'bold', 
        textTransform: 'uppercase',
        textDecoration: 'none',
    };

    const navbarStyle = {
        position: 'fixed', 
        top: 0,
        width: '100%',
        height:'65px',
        zIndex: 1000, 
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white top" style={navbarStyle}>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMainMenu" aria-controls="navMainMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navMainMenu" className="navbar-collapse collapse">
                <div className="navbar-nav ml-auto">
                    <Link to='/' className="nav-item nav-link active" style={navLinkStyle}>HOME</Link>
                    <Link to='/tickets' className="nav-item nav-link" style={navLinkStyle}>TICKETS</Link>
                    <Link to='/line-up' className="nav-item nav-link" style={navLinkStyle}>LINE-UP</Link>
                    <Link to='/news' className="nav-item nav-link" style={navLinkStyle}>NEWS</Link>
                    <Link to='/aftermovie' className="nav-item nav-link" style={navLinkStyle}></Link>
                    <Link to='/about' className="nav-item nav-link" style={navLinkStyle}>About Us</Link>
                    <Link to='/faq' className="nav-item nav-link" style={navLinkStyle}>FAQ</Link>
                    <Link to='/gallery' className="nav-item nav-link" style={navLinkStyle}>Gallery</Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
