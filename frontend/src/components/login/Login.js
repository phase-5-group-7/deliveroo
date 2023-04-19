import React, { useState } from "react";
import axios from "axios";

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
    <div className="container-t">
      <div className="card-t">
        <div className="inner-box-t" id="card">
          <div className="card-front-t">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label>
              <input className="input-box-t" type="email" id="email" value={email} onChange={handleEmailChange} />

              <label htmlFor="password">Password</label>
              <input type="password" id="password" value={password} onChange={handlePasswordChange} />
              <button type="submit">Login</button>
            </form>

          </div>
          
        </div>
      </div>
     
    </div>
  );
}

export default Login;

