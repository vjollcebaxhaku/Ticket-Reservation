// AddFaq.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, TextField, Button, Box, Typography } from '@mui/material';

const AddFaq = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/faq', { question, answer });
      navigate('/faq-management');
    } catch (error) {
      console.error('Error adding FAQ:', error);
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
        Add FAQ
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
          label="Question"
          variant="outlined"
          fullWidth
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
        <TextField
          label="Answer"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
        />
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          fullWidth
        >
          Add FAQ
        </Button>
      </Box>
    </Container>
  );
};

export default AddFaq;
