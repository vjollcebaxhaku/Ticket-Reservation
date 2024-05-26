import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, TextField, Button, Box, Typography } from '@mui/material';

const EditNews = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/news/${id}`);
        const { title, content } = response.data;
        setTitle(title);
        setContent(content);
      } catch (error) {
        console.error('Error fetching News:', error);
      }
    };

    fetchNews();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/news/${id}`, { title, content });
      navigate('/news-management');
    } catch (error) {
      console.error('Error updating News:', error);
    }
  };

  return (
    <Container 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh', 
        bgcolor: 'background.default', 
        color: 'text.primary', 
        py: 4 
      }}
    >
      <Typography variant="h3" component="h2" gutterBottom>
        Edit News
      </Typography>
      <Box 
        component="form" 
        onSubmit={handleSubmit} 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 2, 
          width: '100%', 
          maxWidth: '400px', 
          mt: 3 
        }}
      >
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <TextField
          label="Content"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          fullWidth
        >
          Update News
        </Button>
      </Box>
    </Container>
  );
};

export default EditNews;
