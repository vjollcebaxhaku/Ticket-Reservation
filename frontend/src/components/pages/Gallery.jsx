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
        <section style={{ display: 'flex', justifyContent: 'space-between' }}>
          {galleryItems.map((item, index) => (
            <Link key={item.id} to={`/page${index + 1}`} style={{ width: '50%', position: 'relative', overflow: 'hidden' }}>
              <img
                src={`http://localhost:4000${item.imageUrl}`}
                alt={item.title}
                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  padding: '10px',
                  textAlign: 'center',
                }}
              >
                <h2
                  style={{
                    fontSize: '18px',
                    fontFamily: 'Roboto Mono, monospace',
                    fontWeight: 'bold',
                    margin: '0',
                  }}
                >
                  {item.title}
                </h2>
              </div>
            </Link>
          ))}
        </section>
      </Layout>
      <Footer />
    </>
  );
}

export default Gallery;
