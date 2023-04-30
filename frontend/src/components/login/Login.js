import React from "react";
import './Login.css'

function Login({handleLogin, setValues, values, error}) {

  const handleEmailChange = (event) => {
    setValues({...values, email:event.target.value});
  };

  const handlePasswordChange = (event) => {
    setValues({...values, password:event.target.value});
  };
   
 
  return (

    <div id="login-box" className="login-box"> 
      <form onSubmit={handleLogin}>
      <h2 id="loginTitle">Login</h2>
        {error && (
          <div id="error" className="bg-red-100 border mb-4 border-red-400 text-red-700 px-4 py-3 rounded ">
            <strong id="errorTitle">Error: </strong>
            <span>{error}</span>
          </div>
        )}
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