import React from 'react';
import Layout from '../Layout';
import Slider from '../Slider'; 
  const pictureSrc = require('./pictures/pic1.png');
function Home() {


  return (
    <Layout currentPage="Home" pictureSrc={pictureSrc}>
      <Slider /> 
    </Layout>
  );
}

export default Home;
