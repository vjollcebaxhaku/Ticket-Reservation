import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, CircularProgress, Container, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

const UserManagement = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('/api/user');  
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
      await axios.delete(`/api/user/${userId}`);
      // Update the user list after deletion
      setUser(user.filter((user) => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <Container sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', bgcolor: 'background.default', color: 'text.primary', py: 4 }}>
      <Typography variant="h3" component="h2" gutterBottom>
        User Management
      </Typography>
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
                    <Button variant="contained" color="primary" component={Link} to={`/edituser/${user.id}`}>
                      Edit
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() => handleDelete(user.id)}>
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
          No users available.
        </Typography>
      )}
      <Box mt={6}>
        <Button variant="contained" color="primary" component={Link} to="/dashboard">
          Go Back to Dashboard
        </Button>
      </Box>
    </Container>
  );
};

export default UserManagement;
