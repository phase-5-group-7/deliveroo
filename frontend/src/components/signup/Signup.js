import React, { useState } from "react";
import axios from "axios";
import '../login/Login.css'

function Signup() {
  const [username, setName] = useState("");
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
      const response = await axios.post("http://localhost:3000/users", {
       username,
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      window.location.href = "/";
      console.log(username);
    } catch (error) {
      console.error(error);
      alert("An error occurred during signup.");
    }
  };


  return (
    <div id="login-box" className="login-box">
    <h2>Sign Up</h2>
    <form onSubmit={handleSubmit}>
      <div id="user-box" className="user-box">
          <input type="text" id="name" value={username} onChange={handleNameChange} />
          <label>Name</label>
      </div>
      <div id="user-box" className="user-box">
        <input type="text" id="email" value={email} onChange={handleEmailChange} />
        <label>Email</label>
      </div>
      <div id="user-box" className="user-box">
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        <label>Password</label>
      </div>
    
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <button>Sign Up</button>
      </a>
      <p>Already have an account?</p>
      <a href="/login">Login here</a>
    </form>
    </div>
  )
}

export default Signup;

