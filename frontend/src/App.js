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
import Dashboard from './dashboard/Dashboard';
import Nav from './components/Nav';
import Register from './components/Login/Regsiter';
import Users from './dashboard/Users';
import DashboardTickets from './dashboard/Tickets'; // Renamed import
import NotFound from './components/pages/NonAdmin';
import AdminRoutes from './AdminRoutes';
import AddUser from './dashboard/users/addUser';
import EditUser from './dashboard/users/editUser';

function App() {
  return (
    <Router>
      <div>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tickets" element={<PageTickets />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/line-up" element={<Lineup />} />
            <Route path="/news" element={<News />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/register" element={<Register />} />
            <Route path='/not-found' element={<NotFound/>}/>
            <Route element={<AdminRoutes />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route element={<Users />} path="/users" />
              <Route element={<AddUser/>} path="/users/add" />
              <Route element={<EditUser />} path="/users/:id" />
              <Route element={<News />} path="/news-management" />
              <Route element={<DashboardTickets />} path="/ticket-management" />
            </Route>
          </Routes>
        </Layout>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
