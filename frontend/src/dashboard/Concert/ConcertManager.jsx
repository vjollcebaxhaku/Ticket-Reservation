import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ConcertManager = () => {
  const [concerts, setConcerts] = useState([]);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);
  const [currentConcert, setCurrentConcert] = useState(null);
  const [newConcert, setNewConcert] = useState({
    name: '',
    year: '',
    location: '',
  });

  useEffect(() => {
    fetchConcerts();
  }, []);

  const fetchConcerts = async () => {
    try {
      const response = await axios.get('http://localhost:4000/concert');
      setConcerts(response.data);
    } catch (error) {
      console.error('Error fetching concerts', error);
    }
  };

  const openEditModal = (concert) => {
    setCurrentConcert(concert);
    setEditModalIsOpen(true);
  };

  const closeEditModal = () => {
    setEditModalIsOpen(false);
    setCurrentConcert(null);
  };

  const openDeleteModal = (concert) => {
    setCurrentConcert(concert);
    setDeleteModalIsOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalIsOpen(false);
    setCurrentConcert(null);
  };

  const openAddModal = () => {
    setNewConcert({
      name: '',
      year: '',
      location: '',
    });
    setAddModalIsOpen(true);
  };

  const closeAddModal = () => {
    setAddModalIsOpen(false);
  };

  const handleEdit = async () => {
    try {
      await axios.put(`http://localhost:4000/concert/${currentConcert.id}`, currentConcert);
      fetchConcerts();
      closeEditModal();
    } catch (error) {
      console.error('Error editing concert', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:4000/concert/${currentConcert.id}`);
      fetchConcerts();
      closeDeleteModal();
    } catch (error) {
      console.error('Error deleting concert', error);
    }
  };

  const handleAdd = async () => {
    try {
      await axios.post('http://localhost:4000/concert', newConcert);
      fetchConcerts();
      closeAddModal();
    } catch (error) {
      console.error('Error adding concert', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (editModalIsOpen) {
      setCurrentConcert({ ...currentConcert, [name]: value });
    } else {
      setNewConcert({ ...newConcert, [name]: value });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Concert Manager</h1>
      <a className="text-2xl font-bold mb-4" href="/dashboard"> / Go Back</a>
      <br />
      <br />
      <button 
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
        onClick={openAddModal}
      >
        Add Concert
      </button>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="w-full bg-gray-100 text-left">
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Year</th>
            <th className="py-2 px-4 border-b">Location</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {concerts.map((concert) => (
            <tr key={concert.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{concert.name}</td>
              <td className="py-2 px-4 border-b">{concert.year}</td>
              <td className="py-2 px-4 border-b">{concert.location}</td>
              <td className="py-2 px-4 border-b">
                <button 
                  className="bg-blue-500 text-white px-3 py-1 rounded mr-2" 
                  onClick={() => openEditModal(concert)}
                >
                  Edit
                </button>
                <button 
                  className="bg-red-500 text-white px-3 py-1 rounded" 
                  onClick={() => openDeleteModal(concert)}
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
        <h2 className="text-xl font-bold mb-4">Edit Concert</h2>
        {currentConcert && (
          <form onSubmit={(e) => { e.preventDefault(); handleEdit(); }}>
            <label className="block mb-2">
              Name:
              <input 
                type="text" 
                name="name" 
                value={currentConcert.name} 
                onChange={handleChange} 
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
              />
            </label>
            <label className="block mb-2">
              Year:
              <input 
                type="number" 
                name="year" 
                value={currentConcert.year} 
                onChange={handleChange} 
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
              />
            </label>
            <label className="block mb-2">
              Location:
              <input 
                type="text" 
                name="location" 
                value={currentConcert.location} 
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
        <p>Are you sure you want to delete {currentConcert?.name}?</p>
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
        <h2 className="text-xl font-bold mb-4">Add Concert</h2>
        <form onSubmit={(e) => { e.preventDefault(); handleAdd(); }}>
          <label className="block mb-2">
            Name:
            <input 
              type="text" 
              name="name" 
              value={newConcert.name} 
              onChange={handleChange} 
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </label>
          <label className="block mb-2">
            Year:
            <input 
              type="number" 
              name="year" 
              value={newConcert.year} 
              onChange={handleChange} 
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </label>
          <label className="block mb-2">
            Location:
            <input 
              type="text" 
              name="location" 
              value={newConcert.location} 
              onChange={handleChange} 
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </label>
          <div className="flex justify-end">
            <button 
              type="submit" 
              className="bg-green-500 text-white px-4 py-2 rounded mr-2"
            >
              Add
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

export default ConcertManager;
