import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../Nav'; // Përditëso shtegun për komponentin Nav
import Footer from '../Footer'; // Përditëso shtegun për komponentin Footer
import Layout from '../Layout';
import Slider from '../Slider';
import lineupPic from './pictures/pic4.png'; 
import axios from 'axios'; // Importo axios për kërkesa API
import { Box, Typography } from '@mui/material';

function Lineup() {
  const navigate = useNavigate();
  const [festivals, setFestivals] = useState([]);

  useEffect(() => {
    axios.get('/api/festivals')
      .then(response => setFestivals(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleClick = (id) => {
    navigate(`/lineuppages/${id}`);
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
      <Nav festivals={festivals} /> {/* Përfshi komponentin Nav me festivals si prop */}
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
          height: '75px', // Sigurohu që lartësia përputhet me Slider
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around', // Rregullo hapësirën siç është e nevojshme
        }}
      >
        {festivals.map(festival => (
          <Typography
            key={festival.id}
            variant="h6"
            onClick={() => handleClick(festival.id)}
            sx={{
              fontWeight: 'bold',
              textTransform: 'uppercase',
              color: 'black',
              fontSize: '17px',
              fontFamily: 'Roboto Mono, monospace',
              cursor: 'pointer',
              '&:hover': {
                color: '#db2d84', // Ndrysho ngjyrën e tekstit në rozë kur është mbi
              },
            }}
          >
            {`${festival.name} ${festival.year}`}
          </Typography>
        ))}
      </Box>
      <Footer /> {/* Përfshi komponentin Footer */}
    </>
  );
}

export default Lineup;
