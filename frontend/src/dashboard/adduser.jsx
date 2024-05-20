import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AddUser = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/users', { username, email, role });
      history.push('/dashboard/users');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div className="font-sans bg-gray-900 text-white min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Add User</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium mb-1">Username</label>
          <input
            type="text"
            id="username"
            className="w-full px-3 py-2 bg-gray-800 rounded-md text-white"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 bg-gray-800 rounded-md text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="role" className="block text-sm font-medium mb-1">Role</label>
          <input
            type="text"
            id="role"
            className="w-full px-3 py-2 bg-gray-800 rounded-md text-white"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-500">
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
