import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Alert, Box, Button, CircularProgress, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

const FaqManagement = () => {
  const [faq, setFaq] = useState([]);
  const [loading, setLoading] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [faqToDelete, setFaqToDelete] = useState(null);

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

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:4000/faq/${faqToDelete}`);
      setSnackbarOpen(true);
      setFaq(faq.filter((faqItem) => faqItem.id !== faqToDelete));
      setConfirmDialogOpen(false);
    } catch (error) {
      console.error('Error deleting FAQ:', error);
      setConfirmDialogOpen(false);
    }
  };

  const openConfirmDialog = (faqId) => {
    setFaqToDelete(faqId);
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
        bgcolor: '#f5f5f5',
        borderRadius: 4,
        p: 4,
        boxShadow: 1
      }}
    >
      <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', py: 4 }}>
        <Typography variant="h3" component="h2" gutterBottom sx={{ fontFamily: "'Roboto Mono', monospace", color: 'black' }}>
          FAQ Management
        </Typography>
        <Box mb={2}>
          <Button variant="contained" style={{ backgroundColor: '#630a87', color: '#fff', fontFamily: "'Roboto Mono', monospace" }} component={Link} to="/faq-management/add">
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
              {faq.map((faqItem) => (
                <TableRow key={faqItem.id} hover>
                  <TableCell>{faqItem.id}</TableCell>
                  <TableCell>{faqItem.question}</TableCell>
                  <TableCell>{faqItem.answer}</TableCell>
                  <TableCell>
                    <Box display="flex" gap={1}>
                      <Button variant="contained" style={{ backgroundColor: '#630a87', color: '#fff', fontFamily: "'Roboto Mono', monospace" }} component={Link} to={`/faq-management/edit/${faqItem.id}`}>
                        Edit
                      </Button>
                      <Button variant="contained" style={{ backgroundColor: '#FF69B4', fontFamily: "'Roboto Mono', monospace", color: 'black' }} onClick={() => openConfirmDialog(faqItem.id)}>
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
            No FAQs available.
          </Typography>
        )}
        <Box mt={6}>
          <Button variant="contained" style={{ backgroundColor: '#FF69B4', fontFamily: "'Roboto Mono', monospace", color: 'black' }} component={Link} to="/dashboard">
            Go Back to Dashboard
          </Button>
        </Box>
        <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
          <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
            FAQ has been deleted!
          </Alert>
        </Snackbar>
        <Dialog open={confirmDialogOpen} onClose={closeConfirmDialog}>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ fontFamily: "'Roboto Mono', monospace" }}>
              Are you sure you want to delete this FAQ? This action cannot be undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={closeConfirmDialog} style={{ color: 'black', fontFamily: "'Roboto Mono', monospace" }}>
              Cancel
            </Button>
            <Button onClick={handleDelete} style={{ backgroundColor: '#FF69B4', fontFamily: "'Roboto Mono', monospace", color: 'black' }}>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default FaqManagement;
