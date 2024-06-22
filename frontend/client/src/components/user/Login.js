import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'
export default function UserLogin({ onLogin }) {
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
      const response = await axios.post('http://localhost:2024/userlogin', formData);
      if (response.data && response.data.token) {
        onLogin(response.data.token);
        navigate('/userhome');
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
    <div className=''>
      <div className=''>
        <h1 className='text-center'>Login</h1>
        {error ? <h4 align="center">{error}</h4> : null}
        <div className="mt-2 containersignin" >
      <div className="row justify-content-center mt-3 mb-5">
        <div className="column"  style={{'width':'500px'}}>
          <div className=" box card shadow p-2 ">
            <hr />
            <div className="card-body">
              <form onSubmit={handleSubmit}>
        
                <div className=" field">
                  <label htmlFor="username" className="form-label fw-bold mb-2">
                    Username
                  </label>
                  <div className="control">
                  <input
                  type="text"
                  name="username"
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                  className='form-control mb-3'
                />
                  </div>
        
                </div>
                <div className="field">
                  <label htmlFor="password" className="form-label fw-bold mb-2  ">
                    Password
                  </label>
                  <div className="control">
                  <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  className='form-control mb-3'
                />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <button className="button-18 mb-2" type="submit" role="button">Login</button>
                  <br/>
                  <Link to="/registration" className='p-4 my-2'>Register now?</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}
