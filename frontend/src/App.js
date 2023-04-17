import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import LoginSignup from './components/LoginSignup';
import Footer from './components/Footer';
import FAQPage from './components/FAQPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;