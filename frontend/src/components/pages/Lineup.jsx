import React from 'react';
import Nav from '../Nav'; // Update import path for Nav component
import Footer from '../Footer'; // Update import path for Footer component
import Layout from '../Layout';
import Slider from '../Slider';
import lineupPic from './pictures/pic4.png'; 
import { Box, Typography } from '@mui/material';

function Lineup() {
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
        {['PRISHTINA 2024', 'PRISHTINA 22', 'TIRANA 22', 'PRISHTINA 2019', 'PRISHTINA 2018'].map((year) => (
          <Typography
            key={year}
            variant="h6"
            onClick={() => handleClick(year)}
            sx={{
              fontWeight: 'bold',
              textTransform: 'uppercase',
              color: 'black',
              fontSize: '17px',
              fontFamily: 'Roboto Mono, monospace', // Set the font to 'Roboto Mono, monospace'
              cursor: 'pointer', // Add cursor pointer for clickable effect
            }}
          >
            {year}
          </Typography>
        ))}
      </Box>
      <Footer /> {/* Include the Footer component */}
    </>
  );
}

export default Lineup;
