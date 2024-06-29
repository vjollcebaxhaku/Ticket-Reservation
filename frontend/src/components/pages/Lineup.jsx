import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../Nav'; 
import Footer from '../Footer'; 
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
    console.log(`Clicked on ${year}`);
  };

  return (
    <>
      <Nav /> 
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
          height: '75px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
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
              fontFamily: 'Roboto Mono, monospace',
              cursor: 'pointer', 
            }}
          >
            {concert.name} {concert.year}
          </Typography>
        ))}
      </Box>
      <Footer /> 
    </>
  );
}

export default Lineup;
