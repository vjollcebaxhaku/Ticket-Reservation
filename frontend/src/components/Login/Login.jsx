import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/login', { email, password })
      const { role, userId, permissions } = response.data
      const userPermissions = permissions?.apps || [];
      const permissionsString = userPermissions.join(',');
      sessionStorage.setItem('currentUserRole', role)
      sessionStorage.setItem('userID', userId)
      sessionStorage.setItem('permissions', permissionsString )
      console.log(response.data)
      if (response.data.role === "admin") {
        navigate("/dashboard")

      }
      else if (response.data.success === true) {
        navigate("/")
      }
      else {
        navigate("/login")

      }
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-gray-600 text-center">
          Don't have an account? <Link to="/register" className="text-blue-500">Register here</Link>.
        </p>
      </div>
    </div>
  );
};

export default Login;
