import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import Layout from '../Layout';
import Nav from '../Nav';
import Footer from '../Footer';
import Slider from '../Slider';
import galleryPic from './pictures/pic2.png'; 
import { Box, Typography } from '@mui/material';

function Gallery() {
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    const fetchGalleryItems = async () => {
      try {
        const response = await axios.get('http://localhost:4000/gallery');
        setGalleryItems(response.data);
      } catch (error) {
        console.error('Error fetching gallery items:', error);
      }
    };

    fetchGalleryItems();
  }, []);

  return (
    <>
      <Nav />
      <Layout pictureSrc={galleryPic}>
        <Slider />
        <Box
          sx={{
            backgroundColor: 'lightgray',
            height: '75px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          {['SUNNYHILL FESTIVAL TIRANA 2022', 'SUNNYHILL FESTIVAL PRISHTINA 2022', 'SUNNYHILL FESTIVAL 2019', 'SUNNYHILL FESTIVAL 2018'].map((year) => (
            <Typography
              key={year}
              variant="h6"
              sx={{
                fontWeight: 'bold',
                textTransform: 'uppercase',
                color: 'black',
                fontSize: '15px',
                fontFamily: 'Roboto Mono, monospace',
                cursor: 'pointer',
              }}
            >
              {year}
            </Typography>
          ))}
        </Box>
        <section>
          <div className="gallery-grid" style={{ display: 'flex', flexDirection: 'column' }}>
            {galleryItems.map((item, index) => (
              <div key={item.id} className="gallery-row" style={{ display: 'flex', width: '100%' }}>
                <Link to={`/page${index + 1}`} style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
                  <img src={item.imageUrl} alt={item.title} style={{ width: '100%', objectFit: 'cover', height: '400px' }} />
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
                    <h2 style={{ fontSize: '18px', fontFamily: 'Roboto Mono, monospace', fontWeight: 'bold' }}>{item.title}</h2>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </Layout>
      <Footer />
    </>
  );
}

export default Gallery;
