import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Tickets from './components/pages/Tickets';
import Gallery from './components/pages/Gallery';
import Layout from './components/Layout';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/gallery" element={<Gallery/>}/>
          </Routes>
        </Layout>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
