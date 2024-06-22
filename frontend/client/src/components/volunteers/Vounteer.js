import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./volunteer.css";

const Volunteer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    alert("Registration button clicked!");
    console.log(
      `Name: ${name}, Email: ${email}, Mobile: ${mobile}, Location: ${location}`
    );
  };

  return (
    <div className="wrapper">
      <form className="form" onSubmit={handleRegister}>
        <div className="header">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXu5h3InXUDGTEkvdTl9X756shfsYMicPyhQ&s"
            alt="Company Logo"
            className="logo"
          />
        </div>
        <div className="input_field">
          <input
            type="text"
            placeholder="Name"
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FontAwesomeIcon icon={faUser} className="icon" />
        </div>
        <div className="input_field">
          <input
            type="text"
            placeholder="Email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
        </div>
        <div className="input_field">
          <input
            type="number"
            placeholder="Mobile Number"
            className="input"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <FontAwesomeIcon icon={faUser} className="icon" />
        </div>
        <div className="dropdown">
          <label htmlFor="location-select">Select Required Location:</label>
          <br />
          <br />
          <select
            id="location-select"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="hyderabad">Hyderabad</option>
            <option value="secunderabad">Secunderabad</option>
            <option value="vijayawada">Vijayawada</option>
            <option value="chennai">Chennai</option>
            <option value="bangalore">Bangalore</option>
            <option value="mysore">Mysore</option>
            <option value="mumbai">Mumbai</option>
            <option value="bhubaneswar">Bhubaneswar</option>
            <option value="trivandrum">Trivandrum</option>
            <option value="ladakh">Ladakh</option>
          </select>
        </div>
        <div className="btn">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Volunteer;
