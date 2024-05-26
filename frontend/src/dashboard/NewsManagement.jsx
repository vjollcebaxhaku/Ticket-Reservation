import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Alert, Box, Button, CircularProgress, Container, Snackbar, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

const NewsManagement = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('http://localhost:4000/news');  
        setNews(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching News:', error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleDelete = async (newsId) => {
    try {
      await axios.delete(`http://localhost:4000/news/${newsId}`);
      setSnackbarOpen(true);
      setNews(news.filter((newsItem) => newsItem.id !== newsId));
    } catch (error) {
      console.error('Error deleting News:', error);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', bgcolor: 'background.default', color: 'text.primary', py: 4 }}>
      <Typography variant="h3" component="h2" gutterBottom>
        News Management
      </Typography>
      <Box mb={2}>
        <Button variant="contained" color="primary" component={Link} to="/news-management/add">
          + News
        </Button>
      </Box>
      {loading ? (
        <CircularProgress />
      ) : news.length > 0 ? (
        <Table sx={{ mt: 4, bgcolor: 'background.paper' }}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Content</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {news.map((newsItem) => (
              <TableRow key={newsItem.id} hover>
                <TableCell>{newsItem.id}</TableCell>
                <TableCell>{newsItem.title}</TableCell>
                <TableCell>{newsItem.content}</TableCell>
                <TableCell>
                  <Box display="flex" gap={1}>
                    <Button variant="contained" color="primary" component={Link} to={`/news-management/edit/${newsItem.id}`}>
                      Edit
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() => handleDelete(newsItem.id)}>
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
          No News available.
        </Typography>
      )}
      <Box mt={6}>
        <Button variant="contained" color="primary" component={Link} to="/dashboard">
          Go Back to Dashboard
        </Button>
      </Box>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          News has been deleted!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default NewsManagement;
