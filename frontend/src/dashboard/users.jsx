import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const userManagement = () => {
  const [user, setuser] = useState([]);

  useEffect(() => {
    const fetchuser = async () => {
      try {
        const response = await axios.get('/api/user');  
        setuser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchuser();
  }, []);

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`/api/user/${userId}`);
      // Update the user list after deletion
      setuser(user.filter((user) => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="font-sans bg-gray-900 text-white min-h-screen">
      <h2 className="text-3xl font-bold mb-6">User Management</h2>
      {user.length > 0 ? (
        <table className="w-full">
          <thead>
            <tr>
              <th className="bg-gray-800 text-left py-2 px-4">ID</th>
              <th className="bg-gray-800 text-left py-2 px-4">Username</th>
              <th className="bg-gray-800 text-left py-2 px-4">Email</th>
              <th className="bg-gray-800 text-left py-2 px-4">Role</th>
              <th className="bg-gray-800 text-left py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user) => (
              <tr key={user.id} className="hover:bg-gray-700">
                <td className="py-2 px-4">{user.id}</td>
                <td className="py-2 px-4">{user.username}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.role}</td>
                <td className="py-2 px-4">
                  <div className="flex">
                  <Link to={`/edituser/${user.id}`} 
                  className="text-blue-400 hover:text-blue-200 mr-2">

                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(user.id)}
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
        <p className="text-lg">No user available.</p>
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

export default userManagement;