import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { Alert, Box, Button, CircularProgress, Container, Snackbar, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

Modal.setAppElement('#root');

const GalleryManagement = () => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await axios.get('http://localhost:4000/gallery');
        setGallery(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching gallery:', error);
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  const handleDelete = async (galleryId) => {
    try {
      await axios.delete(`http://localhost:4000/gallery/${galleryId}`);
      setSnackbarOpen(true);
      setGallery(gallery.filter((galleryItem) => galleryItem.id !== galleryId));
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error('Error deleting gallery item:', error);
    }
  };

  const handleAddGallery = async (newGallery) => {
    try {
      const response = await axios.post('http://localhost:4000/gallery', newGallery);
      setGallery([...gallery, response.data]);
      setIsAddModalOpen(false);
    } catch (error) {
      console.error('Error adding gallery item:', error);
    }
  };

  const handleEditGallery = async (updatedGallery) => {
    try {
      const response = await axios.put(`http://localhost:4000/gallery/${updatedGallery.id}`, updatedGallery);
      setGallery(gallery.map((galleryItem) => (galleryItem.id === updatedGallery.id ? response.data : galleryItem)));
      setIsEditModalOpen(false);
    } catch (error) {
      console.error('Error editing gallery item:', error);
    }
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
          Gallery Management
        </Typography>
        <Box mb={2}>
          <Button variant="contained" style={{ backgroundColor: '#630a87', color: '#fff', fontFamily: "'Roboto Mono', monospace" }} onClick={() => setIsAddModalOpen(true)}>
            + Add Gallery Item
          </Button>
        </Box>
        {loading ? (
          <CircularProgress />
        ) : gallery.length > 0 ? (
          <Table sx={{ mt: 4, bgcolor: 'background.paper' }}>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Image URL</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {gallery.map((galleryItem) => (
                <TableRow key={galleryItem.id} hover>
                  <TableCell>{galleryItem.id}</TableCell>
                  <TableCell>{galleryItem.title}</TableCell>
                  <TableCell>{galleryItem.description}</TableCell>
                  <TableCell>{galleryItem.imageUrl}</TableCell>
                  <TableCell>
                    <Box display="flex" gap={1}>
                      <Button variant="contained" style={{ backgroundColor: '#630a87', color: '#fff', fontFamily: "'Roboto Mono', monospace" }} onClick={() => { setSelectedGallery(galleryItem); setIsEditModalOpen(true); }}>
                        Edit
                      </Button>
                      <Button variant="contained" style={{ backgroundColor: '#FF69B4', fontFamily: "'Roboto Mono', monospace", color: 'black' }} onClick={() => { setSelectedGallery(galleryItem); setIsDeleteModalOpen(true); }}>
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
            No Gallery items available.
          </Typography>
        )}
        <Box mt={6}>
          <Button variant="contained" style={{ backgroundColor: '#FF69B4', fontFamily: "'Roboto Mono', monospace", color: 'black' }} component={Link} to="/dashboard">
            Go Back to Dashboard
          </Button>
        </Box>
        <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={() => setSnackbarOpen(false)} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
          <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
            Gallery item has been deleted!
          </Alert>
        </Snackbar>

        <Modal isOpen={isAddModalOpen} onRequestClose={() => setIsAddModalOpen(false)}>
          <AddGalleryModal onAddGallery={handleAddGallery} onClose={() => setIsAddModalOpen(false)} />
        </Modal>

        <Modal isOpen={isEditModalOpen} onRequestClose={() => setIsEditModalOpen(false)}>
          <EditGalleryModal gallery={selectedGallery} onEditGallery={handleEditGallery} onClose={() => setIsEditModalOpen(false)} />
        </Modal>

        <Modal isOpen={isDeleteModalOpen} onRequestClose={() => setIsDeleteModalOpen(false)}>
          <DeleteGalleryModal gallery={selectedGallery} onDeleteGallery={handleDelete} onClose={() => setIsDeleteModalOpen(false)} />
        </Modal>
      </Container>
    </Box>
  );
};

const AddGalleryModal = ({ onAddGallery, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newGallery = { title, description, imageUrl };
    await onAddGallery(newGallery);
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Add Gallery Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full px-3 py-2 border rounded"></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image URL</label>
          <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="flex justify-end">
          <Button type="button" onClick={onClose} style={{ backgroundColor: '#FF69B4', fontFamily: "'Roboto Mono', monospace", color: 'black' }}>
            Cancel
          </Button>
          <Button type="submit" style={{ backgroundColor: '#630a87', color: '#fff', fontFamily: "'Roboto Mono', monospace" }}>
            Add
          </Button>
        </div>
      </form>
    </div>
  );
};

const EditGalleryModal = ({ gallery, onEditGallery, onClose }) => {
  const [title, setTitle] = useState(gallery.title);
  const [description, setDescription] = useState(gallery.description);
  const [imageUrl, setImageUrl] = useState(gallery.imageUrl);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedGallery = { id: gallery.id, title, description, imageUrl };
    await onEditGallery(updatedGallery);
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Edit Gallery Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full px-3 py-2 border rounded"></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image URL</label>
          <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="flex justify-end">
          <Button type="button" onClick={onClose} style={{ backgroundColor: '#FF69B4', fontFamily: "'Roboto Mono', monospace", color: 'black' }}>
            Cancel
          </Button>
          <Button type="submit" style={{ backgroundColor: '#630a87', color: '#fff', fontFamily: "'Roboto Mono', monospace" }}>
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

const DeleteGalleryModal = ({ gallery, onDeleteGallery, onClose }) => {
  const handleDelete = async () => {
    await onDeleteGallery(gallery.id);
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Delete Gallery Item</h2>
      <p>Are you sure you want to delete the gallery item "{gallery.title}"?</p>
      <div className="flex justify-end mt-4">
        <Button type="button" onClick={onClose} style={{ backgroundColor: '#FF69B4', fontFamily: "'Roboto Mono', monospace", color: 'black' }}>
          Cancel
        </Button>
        <Button type="button" onClick={handleDelete} style={{ backgroundColor: '#630a87', color: '#fff', fontFamily: "'Roboto Mono', monospace" }}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default GalleryManagement;
