import React, { useState } from "react";
import "./request.css";

const RequestForHelp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    region: "Choose Region",
    description: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    const newErrors = {};
    if (formData.firstName.trim() === "") {
      newErrors.firstName = "First Name is required.";
    }
    if (formData.lastName.trim() === "") {
      newErrors.lastName = "Last Name is required.";
    }
    if (formData.email.trim() === "") {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(formData.email.trim())) {
      newErrors.email = "Invalid email format.";
    }
    if (formData.region === "Choose Region") {
      newErrors.region = "Please select a region.";
    }
    if (formData.description.trim() === "") {
      newErrors.description = "Description is required.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Your request has been successfully submitted!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        region: "Choose Region",
        description: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="form-container m-auto mt-5 pt-5 mb-3">
      <div className="header">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXu5h3InXUDGTEkvdTl9X756shfsYMicPyhQ&s"
          alt="Company Logo"
          className="logo"
        />
        <h1 className="company-name">Good Universe</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <div className="error">{errors.firstName}</div>}

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <div className="error">{errors.lastName}</div>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <div className="error">{errors.email}</div>}

        <label htmlFor="region">Region</label>
        <select
          id="region"
          name="region"
          value={formData.region}
          onChange={handleChange}
        >
          <option disabled>Choose Region</option>
          <option>Telangana</option>
          <option>Andhra Pradesh</option>
          <option>Maharashtra</option>
          <option>Kerala</option>
          <option>Odisha</option>
        </select>
        {errors.region && <div className="error">{errors.region}</div>}

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="4"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
        {errors.description && (
          <div className="error">{errors.description}</div>
        )}

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default RequestForHelp;
