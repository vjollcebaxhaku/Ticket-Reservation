import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/users', formData);
            console.log(response.data);

            setFormData({
                name: '',
                surname: '',
                email: '',
                username: '',
                password: '',
                confirmPassword: '',
            });

            navigate('/login'); // Redirect to login after successful registration
        } catch (error) {
            console.error('Error occurred while registering:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="max-w-sm w-full p-6 bg-white shadow-md rounded-lg">
                <h2 className="text-xl font-semibold text-center mb-4">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-1">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className="appearance-none border rounded-md w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="surname" className="block text-gray-700 text-sm font-bold mb-1">
                            Surname
                        </label>
                        <input
                            id="surname"
                            name="surname"
                            type="text"
                            className="appearance-none border rounded-md w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your surname"
                            value={formData.surname}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-1">
                            Email Address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="appearance-none border rounded-md w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-1">
                            Username
                        </label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            className="appearance-none border rounded-md w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-1">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            className="appearance-none border rounded-md w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-1">
                            Confirm Password
                        </label>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            className="appearance-none border rounded-md w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    >
                        Register
                    </button>
                </form>
                <p className="mt-4 text-gray-600 text-center text-sm">
                    Already have an account? <Link to="/login" className="text-blue-500">Login here</Link>.
                </p>
            </div>
        </div>
    );
};

export default RegisterForm;
