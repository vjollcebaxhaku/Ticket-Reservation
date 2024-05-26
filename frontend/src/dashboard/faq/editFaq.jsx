// EditFaq.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, TextField, Button, Box, Typography } from '@mui/material';

const EditFaq = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    const fetchFaq = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/faq/${id}`);
        const { question, answer } = response.data;
        setQuestion(question);
        setAnswer(answer);
      } catch (error) {
        console.error('Error fetching FAQ:', error);
      }
    };

    fetchFaq();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/faq/${id}`, { question, answer });
      navigate('/faq-management');
    } catch (error) {
      console.error('Error updating FAQ:', error);
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
        Edit FAQ
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
          Update FAQ
        </Button>
      </Box>
    </Container>
  );
};

export default EditFaq;
