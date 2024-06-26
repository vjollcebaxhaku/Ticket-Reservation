import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const LineupDashboard = () => {
  const [lineup, setLineup] = useState([]);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);
  const [currentArtist, setCurrentArtist] = useState(null);
  const [newArtist, setNewArtist] = useState({
    artistName: '',
    genre: '',
    description: '',
    imageUrl: '',
    concertID: null,
  });

  useEffect(() => {
    fetchLineup();
  }, []);

  const fetchLineup = async () => {
    try {
      const response = await axios.get('http://localhost:4000/lineup');
      setLineup(response.data);
    } catch (error) {
      console.error('Error fetching lineup', error);
    }
  };

  const openEditModal = (artist) => {
    setCurrentArtist(artist);
    setEditModalIsOpen(true);
  };

  const closeEditModal = () => {
    setEditModalIsOpen(false);
    setCurrentArtist(null);
  };

  const openDeleteModal = (artist) => {
    setCurrentArtist(artist);
    setDeleteModalIsOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalIsOpen(false);
    setCurrentArtist(null);
  };

  const openAddModal = () => {
    setNewArtist({
      artistName: '',
      genre: '',
      description: '',
      imageUrl: '',
      concertID: '',
    });
    setAddModalIsOpen(true);
  };

  const closeAddModal = () => {
    setAddModalIsOpen(false);
  };

  const handleEdit = async () => {
    try {
      await axios.put(`http://localhost:4000/lineup/${currentArtist.id}`, currentArtist);
      fetchLineup();
      closeEditModal();
    } catch (error) {
      console.error('Error editing lineup', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:4000/lineup/${currentArtist.id}`);
      fetchLineup();
      closeDeleteModal();
    } catch (error) {
      console.error('Error deleting lineup', error);
    }
  };

  const handleAdd = async () => {
    try {
      await axios.post('http://localhost:4000/lineup', newArtist);
      fetchLineup();
      closeAddModal();
    } catch (error) {
      console.error('Error adding lineup', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (editModalIsOpen) {
      setCurrentArtist({ ...currentArtist, [name]: value });
    } else {
      setNewArtist({ ...newArtist, [name]: value });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Lineup</h1>
      <a className="text-2xl font-bold mb-4" href="/dashboard"> / Go Back</a>
      <br />
      <br />
      <button 
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
        onClick={openAddModal}
      >
        Add Lineup
      </button>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="w-full bg-gray-100 text-left">
            <th className="py-2 px-4 border-b">Artist Name</th>
            <th className="py-2 px-4 border-b">Genre</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Image</th>
            <th className="py-2 px-4 border-b">Concert ID</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {lineup.map((artist) => (
            <tr key={artist.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{artist.artistName}</td>
              <td className="py-2 px-4 border-b">{artist.genre}</td>
              <td className="py-2 px-4 border-b">{artist.description}</td>
              <td className="py-2 px-4 border-b">
                <img src={artist.imageUrl} alt={artist.artistName} className="w-12 h-12 object-cover" />
              </td>
              <td className="py-2 px-4 border-b">{artist.concertID}</td>
              <td className="py-2 px-4 border-b">
                <button 
                  className="bg-blue-500 text-white px-3 py-1 rounded mr-2" 
                  onClick={() => openEditModal(artist)}
                >
                  Edit
                </button>
                <button 
                  className="bg-red-500 text-white px-3 py-1 rounded" 
                  onClick={() => openDeleteModal(artist)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal 
        isOpen={editModalIsOpen} 
        onRequestClose={closeEditModal}
        className="bg-white rounded-lg p-8 max-w-md mx-auto my-8"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <h2 className="text-xl font-bold mb-4">Edit Artist</h2>
        {currentArtist && (
          <form onSubmit={(e) => { e.preventDefault(); handleEdit(); }}>
            <label className="block mb-2">
              Artist Name:
              <input 
                type="text" 
                name="artistName" 
                value={currentArtist.artistName} 
                onChange={handleChange} 
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
              />
            </label>
            <label className="block mb-2">
              Genre:
              <input 
                type="text" 
                name="genre" 
                value={currentArtist.genre} 
                onChange={handleChange} 
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
              />
            </label>
            <label className="block mb-2">
              Description:
              <input 
                type="text" 
                name="description" 
                value={currentArtist.description} 
                onChange={handleChange} 
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
              />
            </label>
            <label className="block mb-2">
              Image URL:
              <input 
                type="text" 
                name="imageUrl" 
                value={currentArtist.imageUrl} 
                onChange={handleChange} 
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
              />
            </label>
            <label className="block mb-4">
              Concert ID:
              <input 
                type="number" 
                name="concertID" 
                value={currentArtist.concertID} 
                onChange={handleChange} 
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
              />
            </label>
            <div className="flex justify-end">
              <button 
                type="submit" 
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              >
                Save
              </button>
              <button 
                onClick={closeEditModal} 
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </Modal>

      <Modal 
        isOpen={deleteModalIsOpen} 
        onRequestClose={closeDeleteModal}
        className="bg-white rounded-lg p-8 max-w-md mx-auto my-8"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
        <p>Are you sure you want to delete {currentArtist?.artistName}?</p>
        <div className="flex justify-end mt-4">
          <button 
            onClick={handleDelete} 
            className="bg-red-500 text-white px-4 py-2 rounded mr-2"
          >
            Yes
          </button>
          <button 
            onClick={closeDeleteModal} 
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            No
          </button>
        </div>
      </Modal>

      <Modal 
        isOpen={addModalIsOpen} 
        onRequestClose={closeAddModal}
        className="bg-white rounded-lg p-8 max-w-md mx-auto my-8"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <h2 className="text-xl font-bold mb-4">Add Artist</h2>
        <form onSubmit={(e) => { e.preventDefault(); handleAdd(); }}>
          <label className="block mb-2">
            Artist Name:
            <input 
              type="text" 
              name="artistName" 
              value={newArtist.artistName} 
              onChange={handleChange} 
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </label>
          <label className="block mb-2">
            Genre:
            <input 
              type="text" 
              name="genre" 
              value={newArtist.genre} 
              onChange={handleChange} 
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </label>
          <label className="block mb-2">
            Description:
            <input 
              type="text" 
              name="description" 
              value={newArtist.description} 
              onChange={handleChange} 
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </label>
          <label className="block mb-2">
            Image URL:
            <input 
              type="text" 
              name="imageUrl" 
              value={newArtist.imageUrl} 
              onChange={handleChange} 
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </label>
          <label className="block mb-4">
            Concert ID:
            <input 
              type="number" 
              name="concertID" 
              value={newArtist.concertID} 
              onChange={handleChange} 
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </label>
          <div className="flex justify-end">
            <button 
              type="submit" 
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            >
              Save
            </button>
            <button 
              onClick={closeAddModal} 
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default LineupDashboard;