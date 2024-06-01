import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../Nav'; // Update import path for Nav component
import Footer from '../Footer'; // Update import path for Footer component
import Layout from '../Layout';
import Slider from '../Slider';
import lineupPic from './pictures/pic4.png'; 
import axios from 'axios'; // Import axios for API requests
import { Box, Typography } from '@mui/material';

function Lineup() {
  const navigate = useNavigate();
  const [festivals, setFestivals] = useState([]);

  useEffect(() => {
    axios.get('/api/festivals')
      .then(response => setFestivals(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleClick = (year) => {
    switch (year) {
      case 'PRISHTINA 2024':
        navigate('/lineuppages/pr24');
        break;
      case 'PRISHTINA 2022':
        navigate('/lineuppages/pr22');
        break;
      case 'TIRANA 2022':
        navigate('/lineuppages/tr22');
        break;
      case 'PRISHTINA 2019':
        navigate('/lineuppages/pr19');
        break;
      case 'PRISHTINA 2018':
        navigate('/lineuppages/pr18');
        break;
      default:
        break;
    }
  };

  const imageContainerStyle = {
    float: 'left',
    marginRight: '20px',
  };

  const contentStyle = {
    backgroundColor: 'white',
    padding: '20px',
  };

  return (
    <>
      <Nav festivals={festivals} /> {/* Include the Nav component with festivals passed as prop */}
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
        {['PRISHTINA 2024', 'PRISHTINA 2022', 'TIRANA 2022', 'PRISHTINA 2019', 'PRISHTINA 2018'].map((year) => (
          <Typography
            key={year}
            variant="h6"
            onClick={() => handleClick(year)}
            sx={{
              fontWeight: 'bold',
              textTransform: 'uppercase',
              color: 'black',
              fontSize: '17px',
              fontFamily: 'Roboto Mono, monospace',
              cursor: 'pointer',
              '&:hover': {
                color: '#db2d84', // Change text color to pink on hover
              },
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
