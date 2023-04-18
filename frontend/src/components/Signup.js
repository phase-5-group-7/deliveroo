import React, { useState } from "react";
import axios from "axios";
import '../components/Signup.css'

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("place your signup api here ", {
        name,
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      window.location.href = "/dashboard";
    } catch (error) {
      console.error(error);
      alert("An error occurred during signup.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" value={name} onChange={handleNameChange} />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={handleEmailChange} />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" value={password} onChange={handlePasswordChange} />

      <button type="submit">Signup</button>
      <p>Already have an account? <a href="/login">Login here</a>.</p>
    </form>
  );
}

export default Signup;
