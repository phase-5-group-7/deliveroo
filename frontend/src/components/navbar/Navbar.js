import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function Navbar({ isAuthenticated, setIsAuthenticated }) {
  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <nav className="navbar ">
      <div>
        <img src="https://image.similarpng.com/very-thumbnail/2020/06/Fast-delivery-logo-design-vector-PNG.png" alt="Deliveroo Logo" height="40" />
      </div>
      <ul>
        {isAuthenticated ? (
          <>
            <CSSTransition classNames="fade" timeout={300}>
              <li>
                <Link to="/">HOME</Link>
              </li>
            </CSSTransition>
            <CSSTransition classNames="fade" timeout={300}>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
            </CSSTransition>
            <CSSTransition classNames="fade" timeout={300}>
              <li>
                <Link id="login" to="/login">
                  LOGIN
                </Link>
              </li>
            </CSSTransition>
          </>
        ) : (
          <>
            <CSSTransition classNames="fade" timeout={300}>
              <li>
                <Link to="/">HOME</Link>
              </li>
            </CSSTransition>
            <CSSTransition classNames="fade" timeout={300}>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
            </CSSTransition>
            <CSSTransition classNames="fade" timeout={300}>
              <li>
                <Link to="/orders">ORDER</Link>
              </li>
            </CSSTransition>
            <CSSTransition classNames="fade" timeout={300}>
              <li>
                <Link to="/ordercard">ORDER CARD</Link>
              </li>
            </CSSTransition>

            <CSSTransition classNames="fade" timeout={300}>
              <li>
                <Link onClick={handleLogout} id="login" to="/login">
                  LOGOUT
                </Link>
              </li>
            </CSSTransition>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
