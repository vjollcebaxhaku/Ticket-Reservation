
import React from 'react';
import './Navbar.css'; 

const Navbar = ({ children }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {children}
      </div>
    </nav>
  );
};

export default Navbar;
