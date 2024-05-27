import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, TextField, Button, Box, Typography } from '@mui/material';

const AddUser = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/users', { username, email, role });
      navigate('/users');
    } catch (error) {
      console.error('Error adding user:', error);
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
        bgcolor: '#f5f5f5', // Set background color to grey
        color: 'text.primary', 
        py: 4 
      }}
    >
      <Typography variant="h3" component="h2" gutterBottom sx={{ fontFamily: "'Roboto Mono', monospace", color: 'black' }}>
        Add User
      </Typography>
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
          label="Username"
          variant="outlined"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Role"
          variant="outlined"
          fullWidth
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        />
        <Button 
          type="submit" 
          variant="contained" 
          sx={{ 
            backgroundColor: '#FF69B4', // Set button background color
            color: 'black', // Set button text color
            textTransform: 'uppercase', 
            fontFamily: "'Roboto Mono', monospace", 
            fontSize: '16px', // Set button font size
          }}
          fullWidth
        >
          Add User
        </Button>
      </Box>
    </Container>
  );
};

export default AddUser;
