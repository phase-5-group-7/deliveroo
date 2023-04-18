import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from '../navbar/Navbar';
import Home from '../home/Home';
import About from '../about/About';
import LoginSignup from '../signup/LoginSignup';
import Footer from '../footer/Footer';
import FAQPage from '../faq/FaqPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/faq" element={<FAQPage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
