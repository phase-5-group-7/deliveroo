import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav classname="navbar navbar-expand-lg bg-body-tertiary" >
       <div classname="container-fluid">
        <span id="logo" className="navbar-brand  h1">DELIVEROO</span>
      </div>
      <ul classname="navbar-nav me-auto mb-2 mb-lg-0">
        <li classname="navbar-item">
          <Link to="/">HOME</Link>
        </li>
        <li classname="navbar-item">
          <Link to="/about">ABOUT</Link>
        </li>
        <li classname="navbar-item">
          <Link to="/order">ORDER</Link>
        </li>
        <li classname="navbar-item">
          <Link id="login" to="/login">LOGIN</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
