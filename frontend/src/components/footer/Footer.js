import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import {FaInstagramSquare} from 'react-icons/fa'

function Footer() {
  return (
    <footer>
      <div className="footer-section">
        <h3>FAQ</h3>
        <ul>
          <li>
            <Link to="/faq">How do I create a new account?</Link>
          </li>
          <li>
            <Link to="/faq">What is your refund policy?</Link>
          </li>
          <li>
            <Link to="/faq">How can I contact customer support?</Link>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>About Us</h3>
        <ul>
          <li>
            <Link to="/about">Our Story</Link>
          </li>
          <li>
          </li>
          
        </ul>
      </div>
      <div className="footer-section">
        <h3>Follow Us</h3>
        <ul>
          <li>
            <a href="#"> <BsFacebook/> deliverooke</a>
          </li>
          <li>
            <a href="#"><FaInstagramSquare/> deliverooke</a>
          </li>
          <li>
            <a href="#"><BsTwitter/> deliverooke</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;