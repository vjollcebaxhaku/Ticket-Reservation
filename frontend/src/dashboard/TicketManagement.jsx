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
      const response = await axios.get('http://localhost:4000/tickets');
      setTickets(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching tickets:', error);
      setLoading(false);
    }
  };

  const deleteTicket = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/tickets/${id}`);
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
    <Box
      sx={{
        bgcolor: '#f5f5f5',
        borderRadius: 4,
        p: 4,
        boxShadow: 1
      }}
    >
      <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', py: 4 }}>
        <Typography variant="h3" component="h2" gutterBottom sx={{ fontFamily: "'Roboto Mono', monospace", color: 'black' }}>
          Ticket Management
        </Typography>
        <Box mb={2}>
          <Button variant="contained" style={{ backgroundColor: '#630a87', color: '#fff', fontFamily: "'Roboto Mono', monospace" }} component={Link} to="/ticket-management/add">
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
                      <Button variant="contained" style={{ backgroundColor: '#630a87', color: '#fff', fontFamily: "'Roboto Mono', monospace" }} component={Link} to={`/ticket-management/edit/${ticket.id}`}>
                        Edit
                      </Button>
                      <Button variant="contained" style={{ backgroundColor: '#FF69B4', fontFamily: "'Roboto Mono', monospace", color: 'black' }} onClick={() => deleteTicket(ticket.id)}>
                        Delete
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <Typography variant="h6" sx={{ fontFamily: "'Roboto Mono', monospace", color: 'black' }}>
            No tickets available.
          </Typography>
        )}
        <Box mt={6}>
          <Button variant="contained" style={{ backgroundColor: '#FF69B4', fontFamily: "'Roboto Mono', monospace", color: 'black' }} component={Link} to="/dashboard">
            Go Back to Dashboard
          </Button>
        </Box>
        <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
          <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
            Ticket has been deleted!
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default TicketManagement;
