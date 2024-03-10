import React, { useState } from "react";
import "./FormSubmission.css";

const FormSubmission = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted: ", formData);
  };

  return (
    <form className="form-submission" onSubmit={handleSubmit}>
      <label htmlFor="usernameInput">Username:</label>
      <input
        type="text"
        id="usernameInput"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />

      <label htmlFor="emailInput">Email:</label>
      <input
        type="email"
        id="emailInput"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormSubmission;
