import React from 'react';
import Layout from '../Layout';
import Slider from '../Slider';
import galleryPic from './pic2.png'; 
function Gallery() {
  return (
    <Layout pictureSrc={galleryPic}>
      <Slider />
      <section>
      </section>
    </Layout>
  );
}

export default Gallery;
