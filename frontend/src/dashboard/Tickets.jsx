import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 

const TicketManagement = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get('/api/tickets');
        setTickets(response.data);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    fetchTickets();
  }, []);

  const handleDelete = async (ticketId) => {
    try {
      await axios.delete(`/api/tickets/${ticketId}`);
      // Remove the deleted ticket from the state
      setTickets(tickets.filter((ticket) => ticket.id !== ticketId));
    } catch (error) {
      console.error('Error deleting ticket:', error);
    }
  };

  const handleUpdate = (ticketId) => {
    // Navigate to the update page or open a modal for updating the ticket
    console.log(`Updating ticket with ID ${ticketId}`);
  };

  return (
    <div className="font-sans bg-gray-900 text-white min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Ticket Management</h2>
      {tickets.length > 0 ? (
        <table className="w-full">
          <thead>
            <tr>
              <th className="bg-gray-800 text-left py-2 px-4">ID</th>
              <th className="bg-gray-800 text-left py-2 px-4">Title</th>
              <th className="bg-gray-800 text-left py-2 px-4">Status</th>
              <th className="bg-gray-800 text-left py-2 px-4">Priority</th>
              <th className="bg-gray-800 text-left py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id} className="hover:bg-gray-700">
                <td className="py-2 px-4">{ticket.id}</td>
                <td className="py-2 px-4">{ticket.title}</td>
                <td className="py-2 px-4">{ticket.status}</td>
                <td className="py-2 px-4">{ticket.priority}</td>
                <td className="py-2 px-4">
                  <div className="flex">
                    <button
                      onClick={() => handleUpdate(ticket.id)}
                      className="text-blue-400 hover:text-blue-200 mr-2"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(ticket.id)}
                      className="text-red-400 hover:text-red-200"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-lg">No tickets available.</p>
      )}
      <div className="mt-6">
        <Link to="/dashboard">
          <button className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700">
            Go Back to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TicketManagement;
