import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Ticket = () => {
  const [tickets, setTickets] = useState([]);
  const [newTicket, setNewTicket] = useState({
    name: '',
    price: 0,
    type: ''
  });

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await axios.get('/api/tickets');
      setTickets(response.data);
    } catch (error) {
      console.error('Error fetching tickets:', error);
    }
  };

  const deleteTicket = async (id) => {
    try {
      await axios.delete(`/api/tickets/${id}`);
      setTickets(tickets.filter(ticket => ticket.id !== id));
    } catch (error) {
      console.error('Error deleting ticket:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTicket(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/tickets', newTicket);
      setTickets([...tickets, response.data]);
      setNewTicket({ name: '', price: 0, type: '' });
    } catch (error) {
      console.error('Error creating ticket:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Ticket Management</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input type="text" name="name" value={newTicket.name} onChange={handleChange} placeholder="Ticket Name" required className="border rounded px-2 py-1 mr-2" />
        <input type="number" name="price" value={newTicket.price} onChange={handleChange} placeholder="Price" required className="border rounded px-2 py-1 mr-2" />
        <input type="text" name="type" value={newTicket.type} onChange={handleChange} placeholder="Type" required className="border rounded px-2 py-1 mr-2" />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Ticket</button>
      </form>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td className="border px-4 py-2">{ticket.id}</td>
              <td className="border px-4 py-2">{ticket.name}</td>
              <td className="border px-4 py-2">{ticket.price}</td>
              <td className="border px-4 py-2">{ticket.type}</td>
              <td className="border px-4 py-2">
                <button onClick={() => deleteTicket(ticket.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Delete</button>
                {/* Add additional buttons for editing or updating tickets */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ticket;
