import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../Nav'; // Import Nav component
import Footer from '../Footer'; // Import Footer component
import Layout from '../Layout';
import Slider from '../Slider';
import galleryPic from './pictures/pic5.png';
import { Box, Typography, Button } from '@mui/material';
import burnaPic from './pictures/burna1.jpg'; // Import the image

function News() {
  const [news, setNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('http://localhost:4000/news');  
        setNews(response.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  const handleNewsClick = (id) => {
    setSelectedNews(selectedNews === id ? null : id);
  };

  const renderContent = (article) => (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        <div style={{ flex: '1', paddingRight: '20px' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', textTransform: 'uppercase', color: 'black', fontFamily: 'Roboto Mono, monospace' }}>
            {article.title}
          </Typography>
          <Typography variant="body1" sx={{ color: 'black', fontFamily: 'Roboto Mono, monospace', marginTop: '10px' }}>
            {article.content}
          </Typography>
          <Typography variant="body1" sx={{ color: 'black', fontFamily: 'Roboto Mono, monospace', marginTop: '10px' }}>
            Read more here: <a href={article.url} target="_blank" rel="noopener noreferrer">{article.url}</a>
          </Typography>
        </div>
        <div style={{ flex: '1', paddingLeft: '20px' }}>
          <img src={burnaPic} alt="Burna Boy" style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} />
        </div>
      </Box>
    </>
  );

  return (
    <>
      <Nav /> {/* Include the Nav component */}
      <Layout pictureSrc={galleryPic}>
        <Slider />
        <section>
          <div>
            {news.map((article) => (
              <div key={article.id} className="mb-0">
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{
                    textAlign: 'left',
                    fontWeight: 'bold',
                    fontFamily: 'Roboto Mono, monospace',
                    py: 2,
                    px: 3,
                    mb: 1,
                    transition: 'background-color 0.3s',
                    backgroundColor: selectedNews === article.id ? 'lightgreen' : 'white',
                    color: selectedNews === article.id ? 'black' : 'gray',
                  }}
                  onClick={() => handleNewsClick(article.id)}
                >
                  {article.title}
                </Button>
                {selectedNews === article.id && (
                  <Box
                    sx={{
                      backgroundColor: 'white',
                      color: 'black',
                      borderLeft: '1px solid green',
                      borderRight: '1px solid green',
                      borderBottom: '1px solid green',
                      p: 3,
                      fontFamily: 'Roboto Mono, monospace',
                    }}
                  >
                    {renderContent(article)}
                  </Box>
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
