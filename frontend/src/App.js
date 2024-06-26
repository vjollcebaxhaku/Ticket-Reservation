import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import PageTickets from './components/pages/Tickets'; // Renamed import
import Gallery from './components/pages/Gallery';
import Layout from './components/Layout';
import Lineup from './components/pages/Lineup';
import News from './components/pages/News';
import AboutUs from './components/pages/AboutUs';
import Faq from './components/pages/Faq';
import Login from './components/Login/Login';
import Dashboard from './dashboard/Dashboard';
import Nav from './components/Nav';
import Register from './components/Login/Regsiter';
import Users from './dashboard/users';
import NotFound from './components/pages/NonAdmin';
import AdminRoutes from './AdminRoutes';
import AddUser from './dashboard/users/addUser';
import EditUser from './dashboard/users/editUser';
import AddTicket from './dashboard/tickets/addTicket'; // Import AddTicket component
import EditTicket from './dashboard/tickets/editTicket'; // Import EditTicket component
import TicketManagement from './dashboard/TicketManagement'; // Import TicketManagement component
import FaqManagement from './dashboard/FaqManagement'; // Import FaqManagement component
import AddFaq from './dashboard/faq/addFaq'; // Import AddFaq component
import EditFaq from './dashboard/faq/editFaq'; // Import EditFaq component
import NewsManagement from './dashboard/NewsManagement'; // Import NewsManagement component
import GalleryManagement from './dashboard/GalleryManagement'; // Import NewsManagement component
import RolesManagement from './dashboard/RolesManagement'; // Import NewsManagement component
import AddNews from './dashboard/news/addNews'; // Import AddNews component
import EditNews from './dashboard/news/editNews'; // Import EditNews component
import TicketPurchase from './components/pages/TicketPurchase'; // Import TicketPurchase component
import AddGallery from './dashboard/gallery/addGallery'; // Import AddNews component
import EditGallery from './dashboard/gallery/editGallery'; // Import AddNews component
import { VerifiedTwoTone } from '@mui/icons-material';
import LineupDashboard from './dashboard/lineup/LineupDashboard';
import ConcertManager from './dashboard/Concert/ConcertManager';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tickets" element={<PageTickets />} />{/* ticket Route */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/line-up" element={<Lineup />} />
        <Route path="/news" element={<News />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/register" element={<Register />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/ticket-purchase" element={<TicketPurchase />} /> {/* Add route for TicketPurchase */}
        <Route element={<AdminRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/:id" element={<EditUser />} />
          <Route path="/news-management" element={<NewsManagement />} /> {/* NewsManagement Route */}
          <Route path="/ticket-management" element={<TicketManagement />} />
          <Route path="/ticket-management/add" element={<AddTicket />} /> {/* AddTicket Route */}
          <Route path="/ticket-management/edit/:id" element={<EditTicket />} /> {/* EditTicket Route */}
          <Route path="/faq-management" element={<FaqManagement />} /> {/* FaqManagement Route */}
          <Route path="/faq-management/add" element={<AddFaq />} /> {/* AddFaq Route */}
          <Route path="/faq-management/edit/:id" element={<EditFaq />} /> {/* EditFaq Route */}
          <Route path="/news-management/add" element={<AddNews />} /> {/* AddNews Route */}
          <Route path="/news-management/edit/:id" element={<EditNews />} /> {/* EditNews Route */}
          <Route path="/gallery-management" element={<GalleryManagement />} />
          <Route path="/roles-management" element={<RolesManagement />} />
          <Route path="/gallery-management/add" element={<AddGallery />} /> {/* AddNews Route */}
          <Route path="/gallery-management/edit" element={<EditGallery />} /> {/* AddNews Route */}
          <Route path="/lineup-managment" element={<LineupDashboard />} /> {/* AddNews Route */}
          <Route path="/concert-managment" element={<ConcertManager />} /> {/* AddNews Route */}

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
 