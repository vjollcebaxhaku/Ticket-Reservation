import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';
import Nav from '../Nav';
import Footer from '../Footer';
import ticketPic from './pictures/pic3.png'; 

function Tickets() {
  return (
    <>
      <Nav />
      <Layout pictureSrc={ticketPic} contentStyle={{ paddingTop: '80px' }}>
        <section className="text-center mt-20 relative">
          <div className="flex justify-center">
            <div className="mr-4 p-4">
              <p className="text-3xl font-bold text-purple-800 tracking-wide font-mono">Believers</p>
              <p className="text-4xl font-bold text-gray-500 tracking-wide font-mono mt-6">100€</p>
              <Link to="/ticket-purchase" target="_blank">
                <button className="bg-purple-800 text-black font-mono rounded-sm px-10 py-2 text-custom mt-4">BUY NOW</button>
              </Link>
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full">
              <div className="w-0.5 bg-gray-400 h-full"></div>
            </div>

            <div className="ml-3 p-4">
              <p className="text-3xl font-bold text-purple-800 tracking-wide font-mono">Early-Bird</p>
              <p className="text-4xl font-bold text-gray-500 tracking-wide font-mono mt-6">150€</p>
              <Link to="/ticket-purchase" target="_blank">
                <button className="bg-purple-800 text-black font-mono rounded-sm px-10 py-2 text-custom mt-4">BUY NOW</button>
              </Link>
            </div>
          </div>
        </section>
        <div className="mt-20"></div>
      </Layout>
      <Footer />
    </>
  );
}

export default Tickets;
