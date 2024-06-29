import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
  Box,
  Checkbox,
  CircularProgress,
  Container,
  FormControlLabel,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button
} from '@mui/material';

const availablePermissions = ['FAQ_TESTING', 'TICKETS_VIEW', 'GALLERY_MANAGEMENT', 'NEWS_EDIT']; // Example permissions

const RoleManagement = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/users/${id}`);
        setUser(response.data);
      console.log(response);

        setPermissions(response.data.permissions?.apps || []); 
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [id]);

  const handlePermissionChange = (permission) => {
    setPermissions((prevPermissions) => {
      if (prevPermissions.includes(permission)) {
        return prevPermissions.filter((perm) => perm !== permission);
      } else {
        return [...prevPermissions, permission];
      }
    });
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:4000/users/${id}`, { permissions: { apps: permissions } });
      alert('Permissions updated successfully');
      sessionStorage.setItem('permissions', permissions)
    } catch (error) {
      console.error('Error updating permissions:', error);
      alert('Failed to update permissions');
    }
  };

  if (!user) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container>
      <Box mt={4} mb={2}>
        <Typography variant="h4" align="center">
          Manage Roles for User: {user.username}
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Permission</TableCell>
              <TableCell align="center">Enabled</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {availablePermissions.map((permission) => (
              <TableRow key={permission}>
                <TableCell>{permission}</TableCell>
                <TableCell align="center">
                  <Checkbox
                    checked={permissions.includes(permission)}
                    onChange={() => handlePermissionChange(permission)}
                    color="primary"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box mt={2} display="flex" justifyContent="center">
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Box>
    </Container>
  );
};

export default RoleManagement;
