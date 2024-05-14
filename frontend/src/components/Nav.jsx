import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-white top">
            <div id="navMainMenu" className="navbar-collapse collapse">
                <div className="navbar-nav ml-auto">
                    <Link to='/' className="nav-item nav-link active">HOME</Link>
                    <Link to='/tickets' className="nav-item nav-link">TICKETS</Link>
                    <Link to='/line-up' className="nav-item nav-link">LINE-UP</Link>
                    <Link to='/news' className="nav-item nav-link">NEWS</Link>
                    <Link to='/aftermovie' className="nav-item nav-link"></Link>
                    <Link to='/about' className="nav-item nav-link">About Us</Link>
                    <Link to='/faq' className="nav-item nav-link">FAQ</Link>
                    <Link to='/gallery' className="nav-item nav-link">Gallery</Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
