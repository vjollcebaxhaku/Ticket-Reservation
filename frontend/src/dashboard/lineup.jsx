import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';

function Lineup() {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [festivals, setFestivals] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchFestivals();
  }, []);

  const fetchFestivals = () => {
    axios.get('/api/festivals')
      .then(response => {
        setFestivals(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleAddFestival = () => {
    axios.post('/api/festivals', { name, year })
      .then(response => {
        setMessage('Festival successfully added.');
        // Reset input fields
        setName('');
        setYear('');
        fetchFestivals(); // Refresh festival list after adding
      })
      .catch(error => {
        setMessage('Failed to add festival.');
        console.error(error);
      });
  };

  const handleDeleteFestival = (id) => {
    axios.delete(`/api/festivals/${id}`)
      .then(response => {
        setMessage('Festival successfully deleted.');
        fetchFestivals(); // Refresh festival list after deletion
      })
      .catch(error => {
        setMessage('Failed to delete festival.');
        console.error(error);
      });
  };

  return (
    <Box>
      <Typography variant="h4">Lineup</Typography>
      <Box>
        <TextField
          label="Festival Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" onClick={handleAddFestival}>Add Festival</Button>
        {message && <Typography>{message}</Typography>}
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Year</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {festivals.map((festival) => (
              <TableRow key={festival.id}>
                <TableCell>{festival.name}</TableCell>
                <TableCell>{festival.year}</TableCell>
                <TableCell>
                  <Button variant="outlined" onClick={() => handleDeleteFestival(festival.id)}>Delete</Button>
                  {/* Add edit button here */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Lineup;
