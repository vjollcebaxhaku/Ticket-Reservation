import React from 'react';
import Layout from '../Layout';
import ticketPic from './pictures/pic3.png'; 

function Tickets() {
  return (
    <Layout pictureSrc={ticketPic}>
      <section>
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <div style={{ display: 'inline-block', marginRight: '20px', padding: '0 20px' }}>
            <p style={{ fontSize: '24px', marginBottom: '10px' }}>Believers</p>
            <p style={{ fontSize: '20px', marginBottom: '20px' }}>100€</p>
            <button style={buttonStyle}>BUY NOW</button>
          </div>
          <div style={{ display: 'inline-block', marginLeft: '20px', padding: '0 20px' }}>
            <p style={{ fontSize: '24px', marginBottom: '10px' }}>Early-Bird</p>
            <p style={{ fontSize: '20px', marginBottom: '20px' }}>150€</p>
            <button style={buttonStyle}>BUY NOW</button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

const buttonStyle = {
  backgroundColor: '#800080',
  color: '#fff',
  border: 'none',
  borderRadius: '30px',
  padding: '10px 20px',
  fontSize: '20px',
  cursor: 'pointer',
  marginBottom: '150px', 
  border: '2px solid #800080', 
};

export default Tickets;
