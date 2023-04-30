import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const admin = localStorage.getItem("admin") === "true"
  let auth = localStorage.getItem("isAuthenticated") === "true"

  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem("token");
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("admin")
    auth = false

    navigate(`/login`);
    
  };


  return (
    <nav className="navbar " >
       <div>
        <Link to="/"><span id="logo">DELIVEROO</span></Link>
      </div>
      <ul>
        { !auth ? 
        <>
        <li>
            <Link to="/">HOME</Link>
          </li>
          <li >
            <Link to="/about">ABOUT</Link>
          </li>
          <li >
            <button onClick={handleLogout} id="login">LOGIN</button>
          </li>
        </>
        : 
        <>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li >
            <Link to="/about">ABOUT</Link>
          </li>
          <li >
            <Link to="/ordercard">ORDER CARD</Link>
          </li>
           {!admin ? <><li >
            <Link to="/orders">ORDERS</Link>
          </li></> : <></>}
          
          <li >
            <button onClick={handleLogout} id="login">LOGOUT</button>
          </li>
        </>

      }
      </ul>
    </nav>
  );
}

export default Navbar;
