import React from 'react';
import Login from '../login/Login';
import Signup from './Signup';

function LoginSignup() {
  return (
    <div>
      <h2>Login or Signup</h2>
      <div>
        <Login />
        <Signup />
      </div>
    </div>
  );
}

export default LoginSignup;
