import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../Nav'; // Update import path for Nav component
import Footer from '../Footer'; // Update import path for Footer component
import Layout from '../Layout';
import Slider from '../Slider';
import lineupPic from './pictures/pic4.png'; 
import { Box, Typography } from '@mui/material';

function Lineup() {
  const [concerts, setConcerts] = useState([]);

  useEffect(() => {
    fetchConcerts();
  }, []);

  const fetchConcerts = async () => {
    try {
      const response = await axios.get('http://localhost:4000/concert');
      setConcerts(response.data);
    } catch (error) {
      console.error('Error fetching concert data', error);
    }
  };

  const handleMouseOver = (event) => {
    event.currentTarget.src = burnaHoverPic;
  };

  const handleMouseOut = (event) => {
    event.currentTarget.src = burnaPic;
  };

  const imageContainerStyle = {
    float: 'left',
    marginRight: '20px',
  };

  const contentStyle = {
    backgroundColor: 'white',
    padding: '20px',
  };

  const handleClick = (year) => {
    // Handle click event, for example, navigate to the corresponding page
    console.log(`Clicked on ${year}`);
  };

  return (
    <>
      <Nav /> {/* Include the Nav component */}
      <Layout pictureSrc={lineupPic} contentStyle={contentStyle}>
        <Slider />
        <section>
          <div style={imageContainerStyle}>
          </div>
        </section>
      </Layout>
      <Box
        sx={{
          backgroundColor: 'lightgray',
          height: '75px', // Ensure the height matches the Slider
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around', // Adjust the spacing as needed
        }}
      >
        {concerts.map((concert) => (
          <Typography
            key={concert.id}
            variant="h6"
            onClick={() => handleClick(concert.year)}
            sx={{
              fontWeight: 'bold',
              textTransform: 'uppercase',
              color: 'black',
              fontSize: '17px',
              fontFamily: 'Roboto Mono, monospace', // Set the font to 'Roboto Mono, monospace'
              cursor: 'pointer', // Add cursor pointer for clickable effect
            }}
          >
            {concert.name} {concert.year}
          </Typography>
        ))}
      </Box>
      <Footer /> {/* Include the Footer component */}
    </>
  );
}

export default Lineup;
