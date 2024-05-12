import React from 'react';
import Layout from '../Layout';
import Slider from '../Slider';
import ticketPic from './pictures/pic6.png';
import festivalPic from './pictures/festival.png'; 

function AboutUs() {
  const aboutUsContentStyle = {
    display: 'flex',
    height: '100%',
  };

  const aboutUsImageContainerStyle = {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '100%', 
  };

  const aboutUsImageStyle = {
    maxWidth: '100%', 
    maxHeight: '100%', 
    height: 'auto', 
  };

  const aboutUsTextStyle = {
    flex: '1',
    overflowY: 'auto', 
    padding: '20px', 
    maxHeight: '100%', 
  };

  return (
    <Layout pictureSrc={ticketPic}>
      <Slider />
      <div style={aboutUsContentStyle}>
        <div style={aboutUsImageContainerStyle}>
          <img src={festivalPic} alt="Sunny Hill Festival" style={aboutUsImageStyle} />
        </div>
        <div style={aboutUsTextStyle}>
          <div style={{ height: '100%', overflowY: 'auto' }}>
            <p>SUNNY HILL Festival is the biggest music festival in Kosovo and based on the headliners, probably the biggest in South East Europe. International music festival of the highest standards, one that puts Prishtina – Kosovo on the festival map as a not to be missed cultural place, in a country that loves music and knows how to have fun.</p>
            <p>In each edition, Sunny Hill Festival hosts more than 100,000 music lovers from around the world to come and experience the weekend of the festival with the best lineup – some of the best-known performers of our modern time and charts – including Dua Lipa, Miley Cyrus, J Balvin, Calvin Harris, Martin Garrix, Afrojack, Hardwell, Stormzy, Skepta, AJ Tracey, Action Bronson, Gashi and many more regional and international artists and performers.</p>
            <p>This year, Sunny Hill Festival reclaimed the spotlight of local and global attention this past summer, announcing two new editions, one in Pristina and another in Tirana. Being featured on global media outlets, such as The New York Times, BBC, The Guardian, Vogue, Rolling Stone, Elle, Billboard.com, NME, and many many more, the festival has managed to appear on more than five thousand media articles, all across the world, reaching almost 1 billion impressions, 4M interactions and 4M likes among other KPIs.</p>
            <p>Additionally, by bringing together a great crowd of diverse people from all ages, this year’s editions managed to create a powerful progressive motion in the both countries economic, touristic and cultural development.</p>
            <p>Sunny Hill Festival is at the service of Sunny Hill Foundation. A featured story of Sunny Hill Festival on International New York Times: <a href="https://nyti.ms/30gBfFC" target="_blank" rel="noopener noreferrer">https://nyti.ms/30gBfFC</a>.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUs;
