import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Footer from './components/Footer';
import Slider from './components/Slider'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Layout currentPage="home">
        </Layout>
        <Slider />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
