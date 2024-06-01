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
import AddNews from './dashboard/news/addNews'; // Import AddNews component
import EditNews from './dashboard/news/editNews'; // Import EditNews component
import TicketPurchase from './components/pages/TicketPurchase'; // Import TicketPurchase component
import Pr24 from './components/pages/lineuppages/pr24'; // Corrected path
import Pr22 from './components/pages/lineuppages/pr22'; // Corrected path
import Tr22 from './components/pages/lineuppages/tr22'; // Corrected path
import Pr19 from './components/pages/lineuppages/pr19'; // Corrected path
import Pr18 from './components/pages/lineuppages/pr18'; // Corrected path

function App() {
  return (
    <Router>
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
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/ticket-purchase" element={<TicketPurchase />} /> {/* Add route for TicketPurchase */}
        <Route path="/lineuppages/pr24" element={<Pr24 />} /> {/* Corrected path */}
        <Route path="/lineuppages/pr22" element={<Pr22 />} /> {/* Corrected path */}
        <Route path="/lineuppages/tr22" element={<Tr22 />} /> {/* Corrected path */}
        <Route path="/lineuppages/pr19" element={<Pr19 />} /> {/* Corrected path */}
        <Route path="/lineuppages/pr18" element={<Pr18 />} /> {/* Corrected path */}
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
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
