import React, { useState } from 'react';
import Nav from '../Nav'; // Import Nav component
import Footer from '../Footer'; // Import Footer component
import Layout from '../Layout';
import Slider from '../Slider';
import ticketPic from './pictures/pic6.png';
import festivalPic from './pictures/festival.jpg'; 
import duaPic from './pictures/dua.jpg'; 
import { Box, Typography } from '@mui/material';

function AboutUs() {
  const [currentSection, setCurrentSection] = useState('OUR STORY');
  const [currentImage, setCurrentImage] = useState(festivalPic);

  const containerStyle = {
    display: 'flex',
    height: '48vh',
    justifyContent: 'center',
    alignItems: 'center', // Center items vertically
  };

  const imageContainerStyle = {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '48vh', // Set maximum height to 50% of the viewport height
    padding: 0, // Remove padding
  };

  const imageStyle = {
    width: '100%',
    height: '48vh', // Allow the height to adjust proportionally
  };

  const textStyle = {
    flex: '1',
    overflowY: 'auto',
    padding: '30px',
    fontWeight: 'bold',
    maxHeight: '80%',
    fontSize: '13px',
    fontFamily: 'Roboto Mono, monospace', // Set font family
  };

  const textContainerStyle = {
    height: '300px', // Set height to 300px // Enable vertical scrollbar if needed
  };

  const handleClick = (section) => {
    setCurrentSection(section);
    setCurrentImage(section === 'FOUNDATION' ? duaPic : festivalPic);
  };

  const renderContent = () => {
    if (currentSection === 'FOUNDATION') {
      return (
        <>
          <p>Sunny Hill Foundation is a charity organization set up in Prishtina-Kosovo, under the patronage of Albanian British singer/songwriter Dua Lipa.</p>
          <p>We are passionate and dedicated to our society.</p>
          <p>Just like Dua, we are inspired by our society and feel that those who have tasted success should pass on the chance for others to follow in their footsteps.</p>

          <h3>OUR MISSION</h3>
          <p>Our mission is simple. With knowledge of our country, and through hard work, we aim to be a helping hand for the most vulnerable and in-need parts of our community.</p>
          <p>We want to strengthen democratic values, promote international cooperation, and advance human achievement through music and arts activities.</p>
          <p>We aim to help our community to help itself. We believe in the people of Kosovo, they have the vision to see what is needed, the creativity to overcome problems, and the hard work to make a change in their society.</p>
          <p>We will give a helping hand to our community. We will support groups and projects that make a direct improvement to people’s lives.</p>
          <p>We will fund work that unlocks the passion and potential of Kosovars and we will provide a space for young talents to unleash their creativity in music and arts.</p>
          <p>We will only fund volunteer lead and run organizations, ensuring that every cent is used to help communities to help themselves.</p>
          <p>We will bring together our resources and our expertise to bring forth the vision and hard work of bright-minded people across Kosovo to fund their efforts in order to bring opportunities.</p>
        </>
      );
    } else {
      return (
        <>
          <p>SUNNY HILL Festival is the biggest music festival in Kosovo and based on the headliners, probably the biggest in South East Europe. International music festival of the highest standards, one that puts Prishtina – Kosovo on the festival map as a not to be missed cultural place, in a country that loves music and knows how to have fun.</p>
          <p>In each edition, Sunny Hill Festival hosts more than 100,000 music lovers from around the world to come and experience the weekend of the festival with the best lineup – some of the best-known performers of our modern time and charts – including Dua Lipa, Miley Cyrus, J Balvin, Calvin Harris, Martin Garrix, Afrojack, Hardwell, Stormzy, Skepta, AJ Tracey, Action Bronson, Gashi and many more regional and international artists and performers.</p>
          <p>This year, Sunny Hill Festival reclaimed the spotlight of local and global attention this past summer, announcing two new editions, one in Pristina and another in Tirana. Being featured on global media outlets, such as The New York Times, BBC, The Guardian, Vogue, Rolling Stone, Elle, Billboard.com, NME, and many many more, the festival has managed to appear on more than five thousand media articles, all across the world, reaching almost 1 billion impressions, 4M interactions and 4M likes among other KPIs.</p>
          <p>Additionally, by bringing together a great crowd of diverse people from all ages, this year’s editions managed to create a powerful progressive motion in the both countries economic, touristic and cultural development.</p>
          <p>Sunny Hill Festival is at the service of Sunny Hill Foundation. A featured story of Sunny Hill Festival on International New York Times: <a href="https://nyti.ms/30gBfFC" target="_blank" rel="noopener noreferrer">https://nyti.ms/30gBfFC</a>.</p>
        </>
      );
    }
  };

  return (
    <>
      <Nav /> {/* Include the Nav component */}
      <Layout pictureSrc={ticketPic}>
        <Slider />
        
        {/* New Bar Component */}
        <Box
          sx={{
            backgroundColor: 'lightgray',
            height: '75px', // Ensure the height matches the Slider
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around', // Adjust the spacing as needed
          }}
        >
          {['OUR STORY', 'FOUNDATION'].map((section) => (
            <Typography
              key={section}
              variant="h6"
              onClick={() => handleClick(section)}
              sx={{
                fontWeight: 'bold',
                textTransform: 'uppercase',
                color: 'black',
                fontSize: '15px',
                fontFamily: 'Roboto Mono, monospace', // Set the font to 'Roboto Mono, monospace'
                cursor: 'pointer', // Add cursor pointer for clickable effect
              }}
            >
              {section}
            </Typography>
          ))}
        </Box>
        {/* End of New Bar Component */}

        <div style={containerStyle}>
          <div style={imageContainerStyle}>
            <img src={currentImage} alt="Section Visual" style={imageStyle} />
          </div>
          <div style={textStyle}>
            <div style={textContainerStyle}>
              {renderContent()}
            </div>
          </div>
        </div>
      </Layout>
      <Footer /> {/* Include the Footer component */}
    </>
  );
}

export default AboutUs;
