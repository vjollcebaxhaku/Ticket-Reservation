// AddNews.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, TextField, Button, Box, Typography } from '@mui/material';

const AddNews = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/news', { title, content });
      navigate('/news-management');
    } catch (error) {
      console.error('Error adding news:', error);
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
        Add News
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
          Add News
        </Button>
      </Box>
    </Container>
  );
};

export default AddNews;
