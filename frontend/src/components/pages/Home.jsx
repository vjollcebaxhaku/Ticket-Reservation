import React from 'react';
import Layout from '../Layout';
import Slider from '../Slider';
import { Box, Typography, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Nav from '../Nav'; 
import Footer from '../Footer'; 

const pictureSrc = require('./pictures/pic1.png');

function Home() {

  const TicketsBar = () => {
    return (
      <Box
        sx={{
          backgroundColor: 'lightgray',
          height: '75px', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            textTransform: 'uppercase',
            color: 'black',
            fontSize: '17px',
            fontFamily: 'Roboto Mono, monospace', 
          }}
        >
          TICKETS & MORE
        </Typography>
      </Box>
    );
  };

  const FestivalBar = () => {
    return (
      <Box
        sx={{
          backgroundColor: 'white',
          height: '300px', 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '10px', 
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            textTransform: 'uppercase',
            color: 'purple',
            fontSize: '30px',
            fontFamily: 'Roboto Mono, monospace', 
            marginBottom: '10px', 
          }}
        >
          SUNNY HILL FESTIVAL 2024
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            textTransform: 'uppercase',
            color: 'grey',
            fontSize: '20px', 
            fontFamily: 'Roboto Mono, monospace', 
            marginBottom: '20px', 
          }}
        >
          25, 26, 27, 28 JULY
        </Typography>
        <Link to="/ticket-purchase"> 
          <button className="bg-purple-800 text-black font-mono rounded-sm px-10 py-2 text-custom mt-4">BUY NOW</button>
        </Link>
      </Box>
    );
  };

  const NewsletterBar = () => {
    return (
      <Box
        sx={{
          backgroundColor: 'lightgray',
          height: '75px', // Height of the bar
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '10px', // Margin top to separate it from the above bar
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            textTransform: 'uppercase',
            color: 'black',
            fontSize: '17px',
            fontFamily: 'Roboto Mono, monospace', // Set the font to 'Roboto Mono, monospace'
          }}
        >
          NEWSLETTER
        </Typography>
      </Box>
    );
  };

  const SubscriptionBar = () => {
    return (
      <Box
        sx={{
          backgroundColor: 'lightgray',
          height: '75px', // Height of the bar
          display: 'flex',
          alignItems: 'center',
          // Margin top to separate it from the above bar
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '50%',
            height: '100%',
            backgroundColor: 'white', // White background for email input
            borderRight: 'none', // Remove border on the right side
          }}
        >
          <TextField
            variant="outlined"
            placeholder="EMAIL"
            fullWidth
            InputProps={{
              sx: {
                height: '100%', // Adjust height of the input
                fontFamily: 'Roboto Mono, monospace',
                fontSize: '20px',
                fontWeight: 'bold', // Make the text bold
                border: 'none', // Remove border
              }
            }}
            InputLabelProps={{
              sx:
              {
                color: 'grey', // Placeholder color
                fontWeight: 'bold', // Make the placeholder bold
              }
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '50%',
            height: '100%',
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'purple',
              color: 'black',
              textTransform: 'uppercase',
              fontFamily: 'Roboto Mono, monospace',
              fontSize: '20px',
              fontWeight: 'bold', // Make the text bold
              height: '100%', // Adjust height of the button
              width: '100%',
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
    );
  };

  return (
    <>
      <Nav /> {/* Include the Nav component */}
      <Layout currentPage="Home" pictureSrc={pictureSrc}>
        <Slider />
        <TicketsBar /> {/* Add the TicketsBar component here */}
        <FestivalBar /> {/* Add the FestivalBar component here */}
        <NewsletterBar /> {/* Add the NewsletterBar component here */}
        <SubscriptionBar /> {/* Add the SubscriptionBar component here */}
      </Layout>
      <Footer /> {/* Include the Footer component */}
    </>
  );
}

export default Home;
