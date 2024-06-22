import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AdminLogin({ onLogin }) {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2024/adminlogin', formData);
      if (response.data && response.data.token) {
        onLogin(response.data.token);
        navigate('/adminhome');
      }
    } catch (e) {
      if (e.response && e.response.status === 401) {
        setError('Invalid username or password');
      } else {
        setError('Login failed. Please try again.');
      }
    }
  };

  return (
    <div className='max-w-[500px] mx-auto mt-5'>
      <div className='w-full max-w-[500px] max-h-[500px] shadow-xl flex flex-col p-4 my-4 rounded-lg mt-[50px]'>
        <h1 className='text-2xl text-center my-7 font-bold'>Admin Login</h1>
        {error ? <h4 align="center">{error}</h4> : null}
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <label>Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            className='p-2 my-2 border border-gray-300 rounded-md'
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className='p-2 my-2 border border-gray-300 rounded-md'
          />
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
