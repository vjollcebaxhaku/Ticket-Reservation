

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Navbar.css'; 
const Nav = () => {
  return (
    <Navbar>
      <div className="navbar-links"> 
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/tickets" className="nav-link">Tickets</Link>
        <Link to="/gallery" className="nav-link">Gallery</Link>
        <Link to="/news" className="nav-link">News</Link>
        <Link to="/about" className="nav-link">About Us</Link>
        <Link to="/faq" className="nav-link">FAQ</Link>
        <Link to="/login" className="nav-link">Login</Link>
      </div>
    </Navbar>
  );
};

export default Nav;
