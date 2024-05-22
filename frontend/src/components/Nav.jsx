import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white top">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMainMenu" aria-controls="navMainMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navMainMenu" className="navbar-collapse collapse">
                <div className="navbar-nav ml-auto text-gray-950">
                    <Link to='/' className="nav-item nav-a active text-black uppercase font-bold hover:text-pink-500 transition-colors duration-300" >HOME</Link>
                    <Link to='/tickets' className="nav-item nav-a uppercase font-bold hover:text-pink-500 transition-colors duration-300" >TICKETS</Link>
                    <Link to='/line-up' className="nav-item nav-a uppercase font-bold hover:text-pink-500 transition-colors duration-300" >LINE-UP</Link>
                    <Link to='/news' className="nav-item nav-a uppercase font-bold hover:text-pink-500 transition-colors duration-300" >NEWS</Link>
                    <Link to='/login' className="nav-item nav-a uppercase font-bold hover:text-pink-500 transition-colors duration-300" >Login</Link>
                    <Link to='/aftermovie' className="nav-item nav-a uppercase font-bold hover:text-pink-500 transition-colors duration-300"></Link>
                    <Link to='/about' className="nav-item nav-a uppercase font-bold hover:text-pink-500 transition-colors duration-300" >About Us</Link>
                    <Link to='/faq' className="nav-item nav-a uppercase font-bold hover:text-pink-500 transition-colors duration-300" >FAQ</Link>
                    <Link to='/gallery' className="nav-item nav-a uppercase font-bold hover:text-pink-500 transition-colors duration-300" >Gallery</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
