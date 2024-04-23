// Layout.js
import React from 'react';
import Navbar from './Nav'; 

function Layout({ children, pictureSrc }) {
  return (
    <div>
      <Navbar />
      <div className="picture-container">
        {pictureSrc && <img src={pictureSrc} alt="Page" style={{ width: '100%', display: 'block' }} />}
      </div>
      <section>
        {children}
      </section>
    </div>
  );
}

export default Layout;
