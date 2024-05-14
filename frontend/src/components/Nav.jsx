import React from 'react';
import { a } from 'react-router-dom';

function Nav() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white top" >
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMainMenu" aria-controls="navMainMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navMainMenu" className="navbar-collapse collapse">
                <div className="navbar-nav ml-auto text-gray-950">
                    <a to='/' className="nav-item nav-a active text-black" >HOME</a>
                    <a to='/tickets' className="nav-item nav-a" >TICKETS</a>
                    <a to='/line-up' className="nav-item nav-a" >LINE-UP</a>
                    <a to='/news' className="nav-item nav-a" >NEWS</a>
                    <a to='/login' className="nav-item nav-a" >Login</a>
                    <a to='/aftermovie' className="nav-item nav-a" ></a>
                    <a to='/about' className="nav-item nav-a" >About Us</a>
                    <a to='/faq' className="nav-item nav-a" >FAQ</a>
                    <a to='/gallery' className="nav-item nav-a" >Gallery</a>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
