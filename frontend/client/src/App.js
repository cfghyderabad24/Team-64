import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import MainNavBar from "./components/main/MainNavBar";
import AdminNavBar from "./components/admin/AdminNavBar";
import UserNavBar from "./components/user/UserNavBar";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setRole(decodedToken.role);
      } catch (error) {
        console.error("Invalid token:", error);
        localStorage.removeItem("token");
      }
    }
  }, []);

  const onLogin = (token) => {
    try {
      const decodedToken = jwtDecode(token);
      localStorage.setItem("token", token);
      setRole(decodedToken.role);
    } catch (error) {
      console.error("Invalid token:", error);
    }
  };

  return (
    <div className="App">
      <Router>
        {role === "admin" ? (
          <AdminNavBar />
        ) : role === "user" ? (
          <UserNavBar />
        ) : (
          <MainNavBar onLogin={onLogin} />
        )}
        <Routes>
          <Route path="/dash" element={<UserProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
