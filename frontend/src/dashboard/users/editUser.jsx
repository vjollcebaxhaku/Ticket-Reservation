import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, TextField, Button, Box, Typography, Alert } from '@mui/material';

const EditUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    username: '',
    email: '',
    role: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/users/${id}`);
        setUser(response.data);
      } catch (error) {
        setError('Error fetching user. Please try again later.');
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors
    console.log('Submitting form:', user); // Log user data being submitted
    try {
      const response = await axios.put(`http://localhost:4000/users/${id}`, user);
      console.log('Response from server:', response.data); // Log the response from the server
      navigate('/users'); // Navigate to the users page after successful update
    } catch (error) {
      console.error('Error updating user:', error);
      if (error.response && error.response.data) {
        // Server responded with a status other than 200 range
        console.error('Server response error:', error.response.data);
        setError(error.response.data.message || 'Error updating user. Please check your input.');
      } else if (error.request) {
        // Request was made but no response received
        console.error('No response received:', error.request);
        setError('No response from server. Please try again later.');
      } else {
        // Something else happened in setting up the request
        console.error('Request setup error:', error.message);
        setError('Error updating user. Please try again.');
      }
    }
  };

  return (
    <Container 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh', 
        bgcolor: 'background.default', 
        color: 'text.primary', 
        py: 4 
      }}
    >
      <Typography variant="h3" component="h2" gutterBottom>
        Edit User
      </Typography>
      {error && (
        <Alert severity="error" sx={{ width: '100%', maxWidth: '400px', mb: 2 }}>
          {error}
        </Alert>
      )}
      <Box 
        component="form" 
        onSubmit={handleSubmit} 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 2, 
          width: '100%', 
          maxWidth: '400px', 
          mt: 3 
        }}
      >
        <TextField
          name="username"
          label="Username"
          variant="outlined"
          fullWidth
          value={user.username}
          onChange={handleChange}
          required
        />
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          type="email"
          fullWidth
          value={user.email}
          onChange={handleChange}
          required
        />
        <TextField
          name="role"
          label="Role"
          variant="outlined"
          fullWidth
          value={user.role}
          onChange={handleChange}
          required
        />
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          fullWidth
        >
          Save Changes
        </Button>
      </Box>
    </Container>
  );
};

export default EditUser;
