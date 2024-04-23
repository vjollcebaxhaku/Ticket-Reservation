import React from 'react';
import Layout from '../Layout';
import Slider from '../Slider'; // Import the Slider component
  const pictureSrc = require('./pic1.png');
function Home() {
  // Specify the path to the picture source
  const pictureSrc = require('./pic1.png');

  return (
    <Layout currentPage="Home" pictureSrc={pictureSrc}>
      <Slider /> {/* Include the Slider component */}
      <section>
        {/* Add your home page content here */}

      </section>
    </Layout>
  );
}

export default Home;
