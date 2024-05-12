import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ email, password });
    try {
      const response = await axios.post('http://localhost:4000/login', { email, password });
      console.log(response);
      if (response.data.success === true) {
        navigate("/")
      }
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();
  return (
    <div className="">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold underline">
      <div className='w-10'></div>
            </h1>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
