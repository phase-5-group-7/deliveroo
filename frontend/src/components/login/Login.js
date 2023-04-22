import React, { useState } from "react";
import axios from "axios";
import './Login.css'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [username, setUsername] = useState(null);
  const [userId, setUserId] = useState("")

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    // setIsAuthenticated(true);
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      const token = response.data.token;
      localStorage.setItem("token", token);
      window.location.href = "/";
      
    } catch (error) {
      console.error(error);
      alert("An error occurred during login.");
    }
  };
  // const token = localStorage.getItem("token")

 
  return (

    <div id="login-box" className="login-box">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
          <button >Login</button>
        </a>
        <p>Don't have an account?</p>
        <a href="/signup">Sign up here</a>
      </form>
    </div>
  );
}

export default Login;