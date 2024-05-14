import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const EditTicket = () => {
  const { id } = useParams();
  const history = useHistory();
  const [ticket, setTicket] = useState({
    title: '',
    status: '',
    priority: ''
  });

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const response = await axios.get(`/api/tickets/${id}`);
        setTicket(response.data);
      } catch (error) {
        console.error('Error fetching ticket:', error);
      }
    };

    fetchTicket();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicket((prevTicket) => ({
      ...prevTicket,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/tickets/${id}`, ticket);
      alert('Ticket updated successfully!');
      history.push('/dashboard'); // Redirect to dashboard after successful update
    } catch (error) {
      console.error('Error updating ticket:', error);
    }
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded p-8 shadow-md">
      <h2 className="text-xl font-bold mb-4">Edit Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-semibold mb-2">
            Ticket Title:
          </label>
          <input
            type="text"
            name="title"
            value={ticket.title}
            onChange={handleChange}
            required
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="status" className="block text-sm font-semibold mb-2">
            Ticket Status:
          </label>
          <input
            type="text"
            name="status"
            value={ticket.status}
            onChange={handleChange}
            required
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="priority" className="block text-sm font-semibold mb-2">
            Ticket Priority:
          </label>
          <input
            type="text"
            name="priority"
            value={ticket.priority}
            onChange={handleChange}
            required
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Update Ticket
        </button>
      </form>
      <button onClick={goBack} className="mt-4 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600">
        Go Back
      </button>
    </div>
  );
};

export default EditTicket;
