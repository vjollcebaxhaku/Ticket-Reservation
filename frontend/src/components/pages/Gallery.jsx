import React from 'react';
import { Link } from 'react-router-dom'; 
import Layout from '../Layout';
import Nav from '../Nav'; // Import Nav component
import Footer from '../Footer'; // Import Footer component
import Slider from '../Slider';
import tiranaPic from './pictures/tirana.png'; 
import prishtinaPic from './pictures/prishtina.png'; 
import sunny2019 from './pictures/sunny2019.png';
import sunnyy2018 from './pictures/sunnyy2018.png';
import galleryPic from './pictures/pic2.png'; 

function Gallery() {
  return (
    <>
      <Nav /> {/* Include the Nav component */}
      <Layout pictureSrc={galleryPic}>
        <Slider />
        <section>
          <div className="gallery-grid" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="gallery-row" style={{ display: 'flex', width: '100%' }}>
              <Link to="/page1" style={{ flex: 1 }}>
                <img src={tiranaPic} alt="Tirana" style={{ width: '100%' }} />
              </Link>
              <Link to="/page2" style={{ flex: 1 }}>
                <img src={prishtinaPic} alt="Prishtina" style={{ width: '100%' }} />
              </Link>
            </div>
            <div className="gallery-row" style={{ display: 'flex', width: '100%' }}>
              <Link to="/page3" style={{ flex: 1 }}>
                <img src={sunny2019} alt="sunny2019" style={{ width: '100%' }} />
              </Link>
              <Link to="/page4" style={{ flex: 1 }}>
                <img src={sunnyy2018} alt="sunnyy2018" style={{ width: '100%' }} />
              </Link>
            </div>
          </div>
        </section>
      </Layout>
      <Footer /> {/* Include the Footer component */}
    </>
  );
}

export default Gallery;
