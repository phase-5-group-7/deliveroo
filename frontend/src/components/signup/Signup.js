import React, { useState } from "react";
import axios from "axios";
import '../login/Login.css'
import './Signup.css'

function Signup() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [admin, setAdmin] = useState()
  const [errors, setErrors] = useState("")

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  // Only to be used when creating an admin
  // const handleAdmin = (event) => {
  //   setAdmin(event.target.value)
  // }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/users", {
        username,
        email,
        password,
        // admin
      });
      localStorage.setItem("token", response.data.token);
      window.location.href = "/login";
      console.log(username);
    } catch (error) {
      if (error.response && error.response.status === 422) {
        console.log(error.response.data.errors)
        setErrors(error.response.data.errors)
      } else {
        console.log("An error occurred. Please try again later.")
        setErrors("An error occurred. Please try again later.");
      }
    }
  };
  

  return (
    <div id="login-box" className="login-box">
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        {
          <div className="bg-red-100 border mb-4 border-red-400 text-red-700 px-4 py-3 rounded ">
            <strong className="font-bold">Error:</strong>
            <ul className="list-disc ml-4">
              {
                 <li>{errors}</li>
              }
            </ul>
          </div>
        }
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

        {/* Only to be used when creating an admin */}
        {/* <div id="user-box" className="user-box">
        <input type="text" id="admin" value={admin} onChange={handleAdmin} />
        <label>Admin Rights</label>
      </div> */}

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

