import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import './Header.css'
import UserLogin from '../user/Login';
import AdminLogin from '../admin/AdminLogin';
import Registration from '../user/Registration';
import Contact from './ContactUs';
import DonorsMainPage from '../user/DonorsMainPage';
export default function Header({ onLogin }) {
  return (
    <div>
   <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
            <div className="container">
              <img className='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXu5h3InXUDGTEkvdTl9X756shfsYMicPyhQ&s' style={{'width':'100px'}}></img>
                <a className="navbar-brand grow" href="/">Good Universe</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                        <Link to="/home" className='p-4' style={{'text-decoration':'none'}}>Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownLost" role="button"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                What We Do
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownLost">
                                <a className="dropdown-item" href="/">Climate change</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/">Health & Well Being</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/">Gender Equality</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Products</a>
                        </li>
                        <li className="nav-item">
                        <Link to="/contact" style={{'text-decoration':'none'}} className='p-4'>Contact</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownLost" role="button"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Profile
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownLost">
                                <a className="dropdown-item" href="/">Dashboard</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/">Logout</a>
                            </div>
                            
                        </li>
                        <li>
                           <Link to="/userlogin" style={{'text-decoration':'none'}}> Sign In </Link></li>
                           <li>
                           <Link to="/donors-page" style={{'text-decoration':'none'}}>Donors Page</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div>
      <hr className='border-b-2' />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/home" element={<Home />} exact />
        <Route path="/contact" element={<Contact/>} exact />
        <Route path="/userlogin" element={<UserLogin onLogin={onLogin} />} exact />
        <Route path="/adminlogin" element={<AdminLogin onLogin={onLogin} />} exact />
        <Route path="/registration" element={<Registration />} exact />
        <Route path="/donors-page" element={<DonorsMainPage/>} exact />

      </Routes>
    </div>
    </div>
  );
}