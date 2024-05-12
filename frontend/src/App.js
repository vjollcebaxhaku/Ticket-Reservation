import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Tickets from './components/pages/Tickets';
import Gallery from './components/pages/Gallery';
import Layout from './components/Layout';
import Lineup from './components/pages/Lineup';
import News from './components/pages/News';
import Footer from './components/Footer';
import Nav from './components/Nav';
import AboutUs from './components/pages/AboutUs';
import Faq from './components/pages/Faq';
import Login from './components/Login/Login';
import Sidebar from './dashboard/Sidebar';
import Dashboard from './dashboard/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/line-up" element={<Lineup />} />
            <Route path="/news" element={<News />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/about" element={<AboutUs />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
        </Layout>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
