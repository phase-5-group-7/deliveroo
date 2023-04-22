import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.css';

function Navbar() {
  return (
    <nav className="navbar " >
       <div>
        <span id="logo">DELIVEROO</span>
      </div>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li >
          <Link to="/about">ABOUT</Link>
        </li>
        <li >
          <Link to="/orders">ORDER</Link>
        </li>
        <li >
          <Link to="/orders">ORDER CARD</Link>
        </li>
        <li >
          <Link id="login" to="/login">LOGIN</Link>
        </li>
        {/* <li >
          <Link id="login" to="/login">LOGOUT</Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
