import React from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import AdminHome from "./AdminHome";

export default function Header() {
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
                  to="/adminhome"
                  className="p-4"
                  style={{ "text-decoration": "none" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/adminhome"
                  className="p-4"
                  style={{ "text-decoration": "none" }}
                >
                  Add Events
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
      <hr className="" />
      <Routes>
        <Route path="/" element={<AdminHome />} exact />
        <Route path="/adminhome" element={<AdminHome />} exact />
      </Routes>
    </div>
  );
}
