import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Alert, Box, Button, CircularProgress, Container, Snackbar, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

const TicketManagement = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await axios.get('/api/tickets');
      setTickets(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching tickets:', error);
      setLoading(false);
    }
  };

  const deleteTicket = async (id) => {
    try {
      await axios.delete(`/api/tickets/${id}`);
      setTickets(tickets.filter(ticket => ticket.id !== id));
      setSnackbarOpen(true);
    } catch (error) {
      console.error('Error deleting ticket:', error);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', bgcolor: 'background.default', color: 'text.primary', py: 4 }}>
      <Typography variant="h3" component="h2" gutterBottom>
        Ticket Management
      </Typography>
      <Box mb={2}>
        <Button variant="contained" color="primary" component={Link} to="/ticket-management/add">
          + Ticket
        </Button>
      </Box>
      {loading ? (
        <CircularProgress />
      ) : tickets.length > 0 ? (
        <Table sx={{ mt: 4, bgcolor: 'background.paper' }}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tickets.map((ticket) => (
              <TableRow key={ticket.id} hover>
                <TableCell>{ticket.id}</TableCell>
                <TableCell>{ticket.name}</TableCell>
                <TableCell>{ticket.price}</TableCell>
                <TableCell>{ticket.type}</TableCell>
                <TableCell>
                  <Box display="flex" gap={1}>
                    <Button variant="contained" color="primary" component={Link} to={`/ticket-management/edit/${ticket.id}`}>
                      Edit
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() => deleteTicket(ticket.id)}>
                      Delete
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <Typography variant="h6">
          No tickets available.
        </Typography>
      )}
      <Box mt={6}>
        <Button variant="contained" color="primary" component={Link} to="/dashboard">
          Go Back to Dashboard
        </Button>
      </Box>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Ticket has been deleted!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default TicketManagement;
