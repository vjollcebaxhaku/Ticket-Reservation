import React from 'react';
import Layout from '../Layout';
import Slider from '../Slider';
import ticketPic from './pic3.png'; // Import the picture for the Tickets page

function Tickets() {
  return (
    <Layout pictureSrc={ticketPic}>
      <Slider />
      <section>
        {/* Add your tickets page content here */}
      </section>
    </Layout>
  );
}

export default Tickets;
