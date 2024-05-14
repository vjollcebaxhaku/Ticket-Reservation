import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const DeleteUser = () => {
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const deleteUser = async () => {
      try {
        await axios.delete(`/api/users/${id}`); 
        history.push('/users');
        alert('User deleted successfully!');
      } catch (error) {
        console.error('Error deleting user:', error);
        alert('Error deleting user. Please try again later.');
      }
    };

    deleteUser();
  }, [id, history]);

  return null;
};

export default DeleteUser;
