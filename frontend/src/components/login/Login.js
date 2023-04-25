import React, { useState } from "react";
import axios from "axios";
import './Login.css'

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: ""
  })

  const handleEmailChange = (event) => {
    setValues({...values, email:event.target.value});
  };

  const handlePasswordChange = (event) => {
    setValues({...values, password:event.target.value});
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    // setIsAuthenticated(true);
    axios
      .post("http://localhost:3000/login", {
          email: values.email,
          password: values.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.jwt)
        localStorage.setItem("user_id", res.data.user.id)
        window.location.href = "/";
        console.log(res)
      })
      .catch(error => {
        console.error(error)
        alert("An error occurred during login.")
      })
  };
  // const token = localStorage.getItem("token")
   
 
  return (

    <div id="login-box" className="login-box">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div id="user-box" className="user-box">
          <input type="text" id="email" onChange={handleEmailChange} />
          <label>Email</label>
        </div>
        <div id="user-box" className="user-box">
          <input type="password" id="password" onChange={handlePasswordChange} />
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