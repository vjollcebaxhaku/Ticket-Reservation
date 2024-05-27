import React, { useState } from 'react';
import Nav from '../Nav'; // Import Nav component
import Footer from '../Footer'; // Import Footer component
import Layout from '../Layout';
import Slider from '../Slider';
import galleryPic from './pictures/pic5.png';
import burnaPic from './pictures/burna1.jpg'; // Import the image
import { Box, Typography } from '@mui/material';

function News() {
  const [selectedNews, setSelectedNews] = useState(null);

  const newsList = [
    { id: 1, title: "BURNA BOY ANNOUNCED AS HEADLINER FOR SUNNY HILL FESTIVAL" },
  ];

  const handleNewsClick = (id) => {
    setSelectedNews(selectedNews === id ? null : id);
  };

  const renderContent = () => {
    return (
      <>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ flex: '1', padding: '20px' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', textTransform: 'uppercase', color: 'black', fontFamily: 'Roboto Mono, monospace' }}>
              Burna Boy announced as headliner for Sunny Hill Festival
            </Typography>
            <Typography variant="body1" sx={{ color: 'black', fontFamily: 'Roboto Mono, monospace', marginTop: '10px' }}>
              Grammy Award-winning artist Burna Boy has been revealed as the inaugural headliner for the 2024 Sunny Hill Festival. Scheduled to run from July 25th to July 28th, the festival will take place in Prishtina, Kosovo.
            </Typography>
            <Typography variant="body1" sx={{ color: 'black', fontFamily: 'Roboto Mono, monospace', marginTop: '10px' }}>
              Sunny Hill Festival holds the distinction of being the largest music festival in Kosovo. It is widely regarded as one of the premier events in South East Europe. Renowned for its stellar lineup and high production standards, the festival has firmly established Prishtina as a cultural hotspot. The festival draws music enthusiasts from far and wide.
            </Typography>
            <Typography variant="body1" sx={{ color: 'black', fontFamily: 'Roboto Mono, monospace', marginTop: '10px' }}>
              Read more here: <a href="https://notjustok.com/news/burna-boy-announced-as-headliner-for-sunny-hill-festival/" target="_blank" rel="noopener noreferrer">https://notjustok.com/news/burna-boy-announced-as-headliner-for-sunny-hill-festival/</a>
            </Typography>
          </div>
          <div style={{ flex: '1', padding: '20px' }}>
            <img src={burnaPic} alt="Burna Boy" style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} /> {/* Add image here */}
          </div>
        </Box>
      </>
    );
  };

  return (
    <>
      <Nav /> {/* Include the Nav component */}
      <Layout pictureSrc={galleryPic}>
        <Slider />
        <section>
          <div>
            {newsList.map((news) => (
              <div key={news.id} className="mb-0">
                <button
                  className={`text-left w-full bg-white text-gray-500 font-bold font-mono py-4 px-6 rounded-lg text-xl relative focus:outline-none transition-colors duration-300 hover:bg-green-200 ${selectedNews === news.id ? 'bg-green-100' : ''}`}
                  onClick={() => handleNewsClick(news.id)}
                >
                  {news.title}
                </button>
                {selectedNews === news.id && (
                  <div className="bg-white text-black font-mono border-l border-r border-b border-green-500 py-3 px-4 text-lg">
                    {renderContent()}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </Layout>
      <Footer /> {/* Include the Footer component */}
    </>
  );
}

export default News;
