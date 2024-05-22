// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css'; // Import CSS for styling

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
