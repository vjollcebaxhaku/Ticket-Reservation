import React from 'react';

function Layout({ children, pictureSrc }) {
  return (
    <div>
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
