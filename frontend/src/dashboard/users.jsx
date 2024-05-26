import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Alert, Box, Button, CircularProgress, Container, Snackbar, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

const UserManagement = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:4000/users');  
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user:', error);
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:4000/users/${userId}`);
      setSnackbarOpen(true);
      setUser(user.filter((user) => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
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
          User Management
        </Typography>
        <Box mb={2}>
          <Button variant="contained" style={{ backgroundColor: '#630a87', color: '#fff', fontFamily: "'Roboto Mono', monospace" }} component={Link} to="/users/add">
            + User
          </Button>
        </Box>
        {loading ? (
          <CircularProgress />
        ) : user.length > 0 ? (
          <Table sx={{ mt: 4, bgcolor: 'background.paper' }}>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {user.map((user) => (
                <TableRow key={user.id} hover>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <Box display="flex" gap={1}>
                      <Button variant="contained" style={{ backgroundColor: '#630a87', color: '#fff', fontFamily: "'Roboto Mono', monospace" }} component={Link} to={`/users/${user.id}`}>
                        Edit
                      </Button>
                      <Button variant="contained" style={{ backgroundColor: '#FF69B4', fontFamily: "'Roboto Mono', monospace", color: 'black' }} onClick={() => handleDelete(user.id)}>
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
            No users available.
          </Typography>
        )}
        <Box mt={6}>
          <Button variant="contained" style={{ backgroundColor: '#FF69B4', fontFamily: "'Roboto Mono', monospace", color: 'black' }} component={Link} to="/dashboard">
            Go Back to Dashboard
          </Button>
        </Box>
        <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
          <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
            User has been deleted!
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default UserManagement;
