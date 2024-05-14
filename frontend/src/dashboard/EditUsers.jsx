import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const EditUser = () => {
  const history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    username: '',
    email: '',
    role: ''
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/api/users/${id}`); // Adjust the API endpoint as needed
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
        // Handle error fetching user data
      }
    };

    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/users/${id}`, user); // Adjust the API endpoint as needed
      alert('User updated successfully!');
      history.push('/users');
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Error updating user. Please try again later.');
    }
  };

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" value={user.username} onChange={handleChange} required /><br />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" value={user.email} onChange={handleChange} required /><br />
        <label htmlFor="role">Role:</label>
        <input type="text" name="role" value={user.role} onChange={handleChange} required /><br />
        <input type="submit" value="Update User" />
      </form>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default EditUser;
