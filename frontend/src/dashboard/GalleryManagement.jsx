import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

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
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Gallery Management</h1>
        <button
          className="bg-purple-600 text-white px-4 py-2 rounded"
          onClick={() => setIsAddModalOpen(true)}
        >
          + Add Gallery Item
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : gallery.length > 0 ? (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Description</th>
              <th className="py-2 px-4 border-b">Image URL</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {gallery.map((galleryItem) => (
              <tr key={galleryItem.id}>
                <td className="py-2 px-4 border-b">{galleryItem.id}</td>
                <td className="py-2 px-4 border-b">{galleryItem.title}</td>
                <td className="py-2 px-4 border-b">{galleryItem.description}</td>
                <td className="py-2 px-4 border-b">{galleryItem.imageUrl}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                    onClick={() => {
                      setSelectedGallery(galleryItem);
                      setIsEditModalOpen(true);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={() => {
                      setSelectedGallery(galleryItem);
                      setIsDeleteModalOpen(true);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No Gallery items available.</div>
      )}

      <Modal isOpen={isAddModalOpen} onRequestClose={() => setIsAddModalOpen(false)}>
        <AddGalleryModal onAddGallery={handleAddGallery} onClose={() => setIsAddModalOpen(false)} />
      </Modal>

      <Modal isOpen={isEditModalOpen} onRequestClose={() => setIsEditModalOpen(false)}>
        <EditGalleryModal gallery={selectedGallery} onEditGallery={handleEditGallery} onClose={() => setIsEditModalOpen(false)} />
      </Modal>

      <Modal isOpen={isDeleteModalOpen} onRequestClose={() => setIsDeleteModalOpen(false)}>
        <DeleteGalleryModal gallery={selectedGallery} onDeleteGallery={handleDelete} onClose={() => setIsDeleteModalOpen(false)} />
      </Modal>
    </div>
  );
};

const AddGalleryModal = ({ onAddGallery, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);

    await onAddGallery(formData);
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Add Gallery Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="flex justify-end">
          <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded mr-2" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

const EditGalleryModal = ({ gallery, onEditGallery, onClose }) => {
  const [title, setTitle] = useState(gallery.title);
  const [description, setDescription] = useState(gallery.description);
  const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedGallery = {
      ...gallery,
      title,
      description,
    };

    if (image) {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('image', image);
      updatedGallery.image = formData;
    }

    await onEditGallery(updatedGallery);
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Edit Gallery Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="flex justify-end">
          <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded mr-2" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">
            Save
          </button>
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
        <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded mr-2" onClick={onClose}>
          Cancel
        </button>
        <button type="button" className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default GalleryManagement;
