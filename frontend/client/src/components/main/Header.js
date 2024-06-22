import React from 'react';
import logo from '../../assets/mainlogo.jpg';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './ContactUs';
import UserLogin from '../user/Login';
import AdminLogin from '../admin/AdminLogin';
import Registration from '../user/Registration';

export default function Header({ onLogin }) {
  return (
    <div>
      <div className='flex justify-between items-center h-18 max-w-[1240px] mx-auto px-4'>
        <img className='max-w-[50px]' src={logo} alt="logo" />
        <div>
          <ul className='flex'>
            <Link to="/home" className='p-4'>Home</Link>
            <Link to="/about" className='p-4'>About</Link>
            <Link to="/contact" className='p-4'>Contact</Link>
          </ul>
        </div>
        <div>
          <Link to="/userlogin">
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Sign In
            </button>
          </Link>
        </div>
      </div>
      <hr className='border-b-2' />

      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/home" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/contact" element={<Contact />} exact />
        <Route path="/userlogin" element={<UserLogin onLogin={onLogin} />} exact />
        <Route path="/adminlogin" element={<AdminLogin onLogin={onLogin} />} exact />
        <Route path="/registration" element={<Registration />} exact />
      </Routes>
    </div>
  );
}
