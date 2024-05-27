import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, TextField, Button, Box, Typography } from '@mui/material';

const EditGallery = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [publishedAt, setPublishedAt] = useState();

  useEffect(() => {
    const fetchGalleryItem = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/gallery/${id}`);
        const { title, description, imageUrl, publishedAt } = response.data;
        setPublishedAt(publishedAt);
        setTitle(title);
        setDescription(description);
        setImageUrl(imageUrl);
      } catch (error) {
        console.error('Error fetching Gallery item:', error);
      }
    };

    fetchGalleryItem();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/gallery/${id}`, { title, description, imageUrl, publishedAt });
      navigate('/gallery-management');
    } catch (error) {
      console.error('Error updating Gallery item:', error);
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
        Edit Gallery Item
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
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <TextField
          label="Image URL"
          variant="outlined"
          fullWidth
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          fullWidth
        >
          Update Gallery Item
        </Button>
      </Box>
    </Container>
  );
};

export default EditGallery;
