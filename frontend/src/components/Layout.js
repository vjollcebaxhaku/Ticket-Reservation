import React from 'react';
import Navbar from './Nav'; 

function Layout({ children, currentPage }) {
  const renderPicture = () => {
    switch (currentPage) {
      case 'home':
        return (
          <img 
            src={require('./pictures/pic1.png')} 
            alt="Home" 
            style={{ width: '100%', display: 'block' }} 
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar />
      {children}
      <div className="picture-container">
        {renderPicture()}
      </div>
    </div>
  );
}

export default Layout;
