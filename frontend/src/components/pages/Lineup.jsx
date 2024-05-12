import React from 'react';
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
  );
}

export default Lineup;
