import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.css';

function Navbar({isAuthenticated, setIsAuthenticated}) {

  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem("token");
    setIsAuthenticated(false)
  };


  return (
    <nav className="navbar " >
       <div>
        <span id="logo">DELIVEROO</span>
      </div>
      <ul>
      {isAuthenticated ? ( 
        <>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li >
            <Link to="/about">ABOUT</Link>
          </li>
          <li >
            <Link id="login" to="/login">LOGIN</Link>
          </li>
        </>
      ) : (
        <>
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
            <Link to="/ordercard">ORDER CARD</Link>
          </li>
          
          <li >
            <Link onClick={handleLogout} id="login" to="/login">LOGOUT</Link>
          </li>
        </>
        )
        }
      </ul>
    </nav>
  );
}

export default Navbar;
