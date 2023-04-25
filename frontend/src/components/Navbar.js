import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <nav>

      <img src='../images/Deliveroo.png' alt="logo" />

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/login">Order</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
