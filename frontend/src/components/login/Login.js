import React, { useState } from "react";
import axios from "axios";
import './Login.css'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("place your login api here ", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      window.location.href = "/dashboard";
    } catch (error) {
      console.error(error);
      alert("An error occurred during login.");
    }
  };

  return (

          <div id="log-box" className="login-box">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div id="login" className="user-box">
                <input type="text" id="email" value={email} onChange={handleEmailChange} />
                <label>Email</label>
              </div>
              <div id="login" className="user-box">
                <input type="password" id="password" value={password} onChange={handlePasswordChange} />
                <label>Password</label>
              </div>

              <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Login
              </a>
              <p>Don't have an account?</p>
              <a href="/signup">Sign up here</a>
            </form>
          </div>
  );
}

export default Login;