import React, { useState } from "react";
import axios from "axios";
import './Signup.css'

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
    <div className="container-t">
    <div className="card-t">
      <div className="inner-box-t" id="card">
        <div className="card-back-t">
          <h2>Create Account</h2>
          <form onSubmit={handleSubmit}>
    
            <input className="input-box-t" type="username" id="username" value={name} placeholder="username" onChange={handleNameChange} />
    
            <input placeholder="Email" className="input-box-t" type="email" id="email" value={email} onChange={handleEmailChange} />
    
            <input placeholder="Password" className="input-box-t" type="password" id="password" value={password} onChange={handlePasswordChange} />
            <button type="submit">Create Account</button>
            <p>Already have an account? <a href="/login">login</a></p>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Signup;
