import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from '../navbar/Navbar';
import Home from '../home/Home';
import About from '../about/About';
import Login from '../login/Login';
import Footer from '../footer/Footer';
import FAQPage from '../faq/FaqPage';
import Signup from '../signup/Signup';
import Order from '../Order/order';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Remove this Route */}
          <Route path="/order" element={<Order />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/faq" element={<FAQPage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
