import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "../main/Home";
import ContactUs from "../main/ContactUs";
import DonorsMainPage from "../user/DonorsMainPage";
import { useNavigate } from "react-router-dom";
import DonateForChild from "./DonateForChild";
import DonateProducts from "./DonateProducts";
import BuyProducts from "./BuyProducts";
import Products from "../Products/Products";
import Dashboard from "../Dash/Dashboard";
export default function Header({ onLogin }) {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };
  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
        <div className="container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXu5h3InXUDGTEkvdTl9X756shfsYMicPyhQ&s"
            style={{ width: "100px" }}
          ></img>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link
                  to="/userhome"
                  className="p-4"
                  style={{ "text-decoration": "none" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownLost"
                >
                  <a className="dropdown-item" href="/">
                    Climate change
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/">
                    Health & Well Being
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/">
                    Gender Equality
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  style={{ "text-decoration": "none" }}
                  className="p-4"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/insights"
                  id="navbarDropdownLost"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dashboard
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownLost"
                >
                  <a className="dropdown-item" href="/">
                    Dashboard
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/">
                    Logout
                  </a>
                </div>
              </li>
      
              <li>
                <Link to="/donors-page" style={{ "text-decoration": "none" }}>
                  Donors Page
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={handleLogOut}
                  className=""
                  style={{ textDecoration: "none" }}
                >
                  Sign Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <hr className="border-b-2" />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/userhome" element={<Home />} exact />
          <Route path="/contact" element={<ContactUs />} exact />
          <Route path="/donors-page" element={<DonorsMainPage />} exact />
          <Route path="/donate-for-child" element={<DonateForChild />} exact />
          <Route path="/donate-products" element={<DonateProducts />} exact />
          <Route path="/buy-products" element={<BuyProducts />} exact />
          <Route path="/products" element={<Products />} exact />
          <Route path="/insights" element={<Dashboard />} exact />
  
        </Routes>
      </div>
    </div>
  );
}
