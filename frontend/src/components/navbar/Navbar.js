import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useNavigate } from "react-router-dom";
import logo from './courier.png'

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
    <nav className="navbar ">
      <div>
        <Link to="/"><img className='logo' src={logo} alt="Deliveroo Logo" height="40" />
          DELIVEROO
        </Link>
      </div>
      <ul>
        {!auth ?
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
                <Link id="login" onClick={handleLogout} to="/login">
                  LOGIN
                </Link>
              </li>
            </CSSTransition>
          </>
          :
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
                <Link to="/orderlist">ORDERS</Link>
              </li>
            </CSSTransition>
            {!admin ? <><CSSTransition classNames="fade" timeout={300}>
              <li>
                <Link to="/orders">CREATE ORDER</Link>
              </li>
            </CSSTransition></> : <></>}

            <CSSTransition classNames="fade" timeout={300}>
              <li>
                <Link onClick={handleLogout} to="/">
                  LOGOUT
                </Link>
              </li>
            </CSSTransition>
          </>
        }
      </ul>
    </nav>
  );
}

export default Navbar;