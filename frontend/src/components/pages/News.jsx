import React from 'react';
import Layout from '../Layout';
import Slider from '../Slider';
import galleryPic from './pictures/pic5.png'; 
function News() {
  return (
    <Layout pictureSrc={galleryPic}>
      <Slider />
      <section>
      </section>
    </Layout>
  );
}

export default News;
