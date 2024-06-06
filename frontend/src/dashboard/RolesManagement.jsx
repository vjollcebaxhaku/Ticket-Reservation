import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Checkbox, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const RoleManagement = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: 'User', permissions: { faq: true, news: false } },
    { id: 2, name: 'Admin', permissions: { faq: true, news: true } },
    { id: 3, name: 'Employer', permissions: { faq: true, news: true } },
  ]);

  const handlePermissionChange = (roleId, permission) => {
    setRoles((prevRoles) =>
      prevRoles.map((role) =>
        role.id === roleId ? { ...role, permissions: { ...role.permissions, [permission]: !role.permissions[permission] } } : role
      )
    );
  };

  const permissions = ['faq', 'news'];

  return (
    <Box
      sx={{
        bgcolor: '#f5f5f5',
        borderRadius: 4,
        p: 4,
        boxShadow: 1
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontFamily: "'Roboto Mono', monospace", color: 'black' }}>
        Role Management
      </Typography>
      <Table sx={{ bgcolor: 'background.paper' }}>
        <TableHead>
          <TableRow>
            <TableCell>Permission</TableCell>
            {roles.map((role) => (
              <TableCell key={role.id}>{role.name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {permissions.map((permission) => (
            <TableRow key={permission}>
              <TableCell>{permission.charAt(0).toUpperCase() + permission.slice(1)}</TableCell>
              {roles.map((role) => (
                <TableCell key={role.id}>
                  <Checkbox
                    checked={role.permissions[permission]}
                    onChange={() => handlePermissionChange(role.id, permission)}
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box mt={2}>
        <Button variant="contained" style={{ backgroundColor: '#FF69B4', fontFamily: "'Roboto Mono', monospace", color: 'black' }} component={Link} to="/">
          Go Back to Dashboard
        </Button>
      </Box>
    </Box>
  );
};

export default RoleManagement;
