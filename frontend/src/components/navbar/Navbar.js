import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import SearchBar from '../searchbar/SearchBar';

function Navbar({ isAuthenticated, setIsAuthenticated }) {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <nav className="navbar ">
      <div>
        <span id="logo">DELIVEROO</span>
      </div>
      <ul>
        {isAuthenticated ? (
          <>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link id="login" to="/login">
                LOGIN
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/orders">ORDER</Link>
            </li>
            <li>
              <Link to="/ordercard">ORDER CARD</Link>
            </li>
            <li>
              <Link onClick={toggleSearch}>SEARCH</Link>
            </li>
            <li>
              <Link onClick={handleLogout} id="login" to="/login">
                LOGOUT
              </Link>
            </li>
          </>
        )}
      </ul>
      {isSearchVisible && <SearchBar />}
    </nav>
  );
}

export default Navbar;
