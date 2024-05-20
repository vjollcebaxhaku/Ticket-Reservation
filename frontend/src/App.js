import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import PageTickets from './components/pages/Tickets'; // Renamed import
import Gallery from './components/pages/Gallery';
import Layout from './components/Layout';
import Lineup from './components/pages/Lineup';
import News from './components/pages/News';
import Footer from './components/Footer';
import AboutUs from './components/pages/AboutUs';
import Faq from './components/pages/Faq';
import Login from './components/Login/Login';
import Sidebar from './dashboard/Sidebar';
import Dashboard from './dashboard/Dashboard';
import Nav from './components/Nav';
import Register from './components/Login/Regsiter';
import Users from './dashboard/users';
import DashboardTickets from './dashboard/Tickets'; // Renamed import

function App() {
  return (
    <Router>

      <div>
        <Nav />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tickets" element={<PageTickets />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/line-up" element={<Lineup />} />
            <Route path="/news" element={<News />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/register" element={<Register />} />
            <Route path="/users" element={<Users />} />
            <Route path="/dashboard/tickets" element={<DashboardTickets />} /> {/* Updated import */}
          </Routes>
        </Layout>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
