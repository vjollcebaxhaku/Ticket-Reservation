import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, TextField, Button, Typography, Box, Snackbar, Alert } from '@mui/material';

const AddTicket = () => {
  const [ticket, setTicket] = useState({ name: '', price: 0, type: '', userId: currentUserId });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTicket((prevTicket) => ({
      ...prevTicket,
      [name]: name === "price" ? parseFloat(value) : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/tickets', ticket);
      setSnackbarOpen(true);
      navigate('/ticket-management');
    } catch (error) {
      console.error('Error adding ticket:', error);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        Add New Ticket
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Ticket Name"
          name="name"
          value={ticket.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Price"
          name="price"
          type="number"
          value={ticket.price}
          onChange={handleChange}
          required
        />
        <TextField
          label="Type"
          name="type"
          value={ticket.type}
          onChange={handleChange}
          required
        />
        <Button variant="contained" color="primary" type="submit">
          Add Ticket
        </Button>
      </Box>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert onClose={handleCloseSnackbar} severity="success">
          Ticket added successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default AddTicket;
