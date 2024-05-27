import React from 'react';
import { Link } from 'react-router-dom'; 
import Layout from '../Layout';
import Nav from '../Nav'; // Import Nav component
import Footer from '../Footer'; // Import Footer component
import Slider from '../Slider';
import tiranaPic from './pictures/tirana.jpg';
import prishtinaPic from './pictures/prishtina.jpeg'; 
import sunny2019 from './pictures/sunny2019.jpg';
import sunnyy2018 from './pictures/sunny2018.jpg';
import galleryPic from './pictures/pic2.png'; 
import { Box, Typography } from '@mui/material'; // Import Box and Typography from Material-UI


function Gallery() {
  return (
    <>
      <Nav /> {/* Include the Nav component */}
      <Layout pictureSrc={galleryPic}>
        <Slider />
        {/* TicketsBar Component */}
        <Box
          sx={{
            backgroundColor: 'lightgray',
            height: '75px', // Ensure the height matches the Slider
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around', // Adjust the spacing as needed
          }}
        >
          {['SUNNYHILL FESTIVAL TIRANA 2022', 'SUNNYHILL FESTIVAL PRISHTINA 2022', 'SUNNYHILL FESTIVAL 2019', 'SUNNYHILL FESTIVAL 2018'].map((year) => (
            <Typography
              key={year}
              variant="h6"
              onClick={() => handleClick(year)}
              sx={{
                fontWeight: 'bold',
                textTransform: 'uppercase',
                color: 'black',
                fontSize: '15px',
                fontFamily: 'Roboto Mono, monospace', // Set the font to 'Roboto Mono, monospace'
                cursor: 'pointer', // Add cursor pointer for clickable effect
              }}
            >
              {year}
            </Typography>
          ))}
        </Box>
        {/* End of TicketsBar Component */}
        <section>
          <div className="gallery-grid" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="gallery-row" style={{ display: 'flex', width: '100%' }}>
              <Link to="/page1" style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
                <img src={tiranaPic} alt="Tirana" style={{ width: '100%', objectFit: 'cover', height: '400px' }} />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
                  <h2 style={{ fontSize: '18px', fontFamily: 'Roboto Mono, monospace', fontWeight: 'bold' }}>Sunnyhill Festival Tirana 2022</h2>
                </div>
              </Link>
              <Link to="/page2" style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
                <img src={prishtinaPic} alt="Prishtina" style={{ width: '100%', objectFit: 'cover', height: '400px' }} />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
                  <h2 style={{ fontSize: '18px', fontFamily: 'Roboto Mono, monospace', fontWeight: 'bold' }}>Sunnyhill Festival Prishtina 2022</h2>
                </div>
              </Link>
            </div>
            <div className="gallery-row" style={{ display: 'flex', width: '100%' }}>
              <Link to="/page3" style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
                <img src={sunny2019} alt="sunny2019" style={{ width: '100%', objectFit: 'cover', height: '400px' }} />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
                  <h2 style={{ fontSize: '18px', fontFamily: 'Roboto Mono, monospace', fontWeight: 'bold' }}>Sunnyhill Festival 2019</h2>
                </div>
              </Link>
              <Link to="/page4" style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
                <img src={sunnyy2018} alt="sunnyy2018" style={{ width: '100%', objectFit: 'cover', height: '400px' }} />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
                  <h2 style={{ fontSize: '18px', fontFamily: 'Roboto Mono, monospace', fontWeight: 'bold' }}>Sunnyhill Festival 2018</h2>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
      <Footer /> {/* Include the Footer component */}
    </>
  );
}

export default Gallery;
