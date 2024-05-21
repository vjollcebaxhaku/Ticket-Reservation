import React from 'react';
import { Box, Typography } from '@mui/material';

const NotFound = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      textAlign: 'center',
      backgroundColor: 'black',
      color: 'white',
    }}
  >
    <Typography variant="h1" component="h1" gutterBottom>
      404 - Page Not Found
    </Typography>
    <Typography variant="h5" component="p">
      Sorry, the page you are looking for does not exist.
    </Typography>
  </Box>
);

export default NotFound;
