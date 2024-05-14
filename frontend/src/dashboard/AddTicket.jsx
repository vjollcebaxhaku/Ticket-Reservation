import React, { useState } from 'react';

const AddTicket = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', name, price, quantity);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900">
      <div className="bg-gray-100 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Add New Ticket</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
            <input type="text" id="name" name="name" value={name} onChange={handleNameChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-700 font-bold mb-2">Price:</label>
            <input type="number" id="price" name="price" value={price} onChange={handlePriceChange} step="0.01" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="quantity" className="block text-gray-700 font-bold mb-2">Quantity:</label>
            <input type="number" id="quantity" name="quantity" value={quantity} onChange={handleQuantityChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500" required />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Add Ticket</button>
        </form>
      </div>
    </div>
  );
};

export default AddTicket;
