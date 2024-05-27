import React from 'react';
import Nav from '../Nav'; // Update import path for Nav component
import Footer from '../Footer'; // Update import path for Footer component
import Layout from '../Layout';
import Slider from '../Slider';
import lineupPic from './pictures/pic4.png'; 
import burnaPic from './pictures/burna.png';
import burnaHoverPic from './pictures/burna1.png';

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

  return (
    <>
      <Nav /> {/* Include the Nav component */}
      <Layout pictureSrc={lineupPic} contentStyle={contentStyle}>
        <Slider />
        <section>
          <div style={imageContainerStyle}>
            <img 
              src={burnaPic} 
              alt="Burna Boy" 
              onMouseOver={handleMouseOver} 
              onMouseOut={handleMouseOut} 
            />
          </div>
        </section>
      </Layout>
      <Footer /> {/* Include the Footer component */}
    </>
  );
}

export default Lineup;
