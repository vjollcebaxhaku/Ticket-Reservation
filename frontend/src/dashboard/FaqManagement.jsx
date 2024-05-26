import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Alert, Box, Button, CircularProgress, Container, Snackbar, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

const FaqManagement = () => {
  const [faq, setFaq] = useState([]);
  const [loading, setLoading] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    const fetchFaq = async () => {
      try {
        const response = await axios.get('http://localhost:4000/faq');  
        setFaq(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching FAQ:', error);
        setLoading(false);
      }
    };

    fetchFaq();
  }, []);

  const handleDelete = async (faqId) => {
    try {
      await axios.delete(`http://localhost:4000/faq/${faqId}`);
      setSnackbarOpen(true);
      setFaq(faq.filter((faq) => faq.id !== faqId));
    } catch (error) {
      console.error('Error deleting FAQ:', error);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', bgcolor: 'background.default', color: 'text.primary', py: 4 }}>
      <Typography variant="h3" component="h2" gutterBottom>
        FAQ Management
      </Typography>
      <Box mb={2}>
        <Button variant="contained" color="primary" component={Link} to="/faq-management/add">
          + FAQ
        </Button>
      </Box>
      {loading ? (
        <CircularProgress />
      ) : faq.length > 0 ? (
        <Table sx={{ mt: 4, bgcolor: 'background.paper' }}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Question</TableCell>
              <TableCell>Answer</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {faq.map((faq) => (
              <TableRow key={faq.id} hover>
                <TableCell>{faq.id}</TableCell>
                <TableCell>{faq.question}</TableCell>
                <TableCell>{faq.answer}</TableCell>
                <TableCell>
                  <Box display="flex" gap={1}>
                    <Button variant="contained" color="primary" component={Link} to={`/faq/edit/${faq.id}`}>
                      Edit
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() => handleDelete(faq.id)}>
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
          No FAQs available.
        </Typography>
      )}
      <Box mt={6}>
        <Button variant="contained" color="primary" component={Link} to="/dashboard">
          Go Back to Dashboard
        </Button>
      </Box>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          FAQ has been deleted!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default FaqManagement;
