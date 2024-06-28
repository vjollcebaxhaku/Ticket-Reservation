import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Alert, Box, Button, CircularProgress, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:4000/users');
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:4000/users/${userToDelete}`);
      setSnackbarOpen(true);
      setUsers(users.filter((user) => user.id !== userToDelete));
      setConfirmDialogOpen(false);
    } catch (error) {
      console.error('Error deleting user:', error);
      setConfirmDialogOpen(false);
    }
  };

  const openConfirmDialog = (userId) => {
    setUserToDelete(userId);
    setConfirmDialogOpen(true);
  };

  const closeConfirmDialog = () => {
    setConfirmDialogOpen(false);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box
      sx={{
        bgcolor: "#f5f5f5",
        borderRadius: 4,
        p: 4,
        boxShadow: 1,
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          py: 4,
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{ fontFamily: "'Roboto Mono', monospace", color: "black" }}
        >
          User Management
        </Typography>
        <Box mb={2}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#630a87",
              color: "#fff",
              fontFamily: "'Roboto Mono', monospace",
            }}
            component={Link}
            to="/users/add"
          >
            + User
          </Button>
        </Box>
        {loading ? (
          <CircularProgress />
        ) : users.length > 0 ? (
          <Table sx={{ mt: 4, bgcolor: "background.paper" }}>
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
              {users.map((user) => (
                <TableRow key={user.id} hover>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <Box display="flex" gap={1}>
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: "#630a87",
                          color: "#fff",
                          fontFamily: "'Roboto Mono', monospace",
                        }}
                        component={Link}
                        to={`/users/${user.id}`}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: "#FF69B4",
                          fontFamily: "'Roboto Mono', monospace",
                          color: "black",
                        }}
                        onClick={() => openConfirmDialog(user.id)}
                      >
                        Delete
                      </Button>
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: "#1976d2",
                          color: "#fff",
                          fontFamily: "'Roboto Mono', monospace",
                        }}
                        component={Link}
                        to={`/role-management/${user.id}`}
                      >
                        Roles
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <Typography
            variant="h6"
            sx={{ fontFamily: "'Roboto Mono', monospace", color: "black" }}
          >
            No users available.
          </Typography>
        )}
        <Box mt={6}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#FF69B4",
              fontFamily: "'Roboto Mono', monospace",
              color: "black",
            }}
            component={Link}
            to="/dashboard"
          >
            Go Back to Dashboard
          </Button>
        </Box>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="success"
            sx={{ width: "100%" }}
          >
            User has been deleted!
          </Alert>
        </Snackbar>
        <Dialog open={confirmDialogOpen} onClose={closeConfirmDialog}>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ fontFamily: "'Roboto Mono', monospace" }}>
              Are you sure you want to delete this user? This action cannot be
              undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={closeConfirmDialog}
              style={{ color: "black", fontFamily: "'Roboto Mono', monospace" }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleDelete}
              style={{
                backgroundColor: "#FF69B4",
                fontFamily: "'Roboto Mono', monospace",
                color: "black",
              }}
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default UserManagement;
