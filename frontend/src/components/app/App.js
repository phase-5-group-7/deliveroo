import {React, useState} from 'react';
import { Routes, Route} from 'react-router-dom';

import Navbar from '../navbar/Navbar';
import Home from '../home/Home';
import About from '../about/About';
import Login from '../login/Login';
import Footer from '../footer/Footer';
import FaqPage from '../faq/FaqPage';
import Signup from '../signup/Signup';
import OrderCard from '../order-card/OrderCard';
import OrderForm from '../Order/order';
import axios from 'axios';

function App() {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [error, setError] = useState(null);


  return (
    <div className="App">
        <Navbar setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />
        <Routes>
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated}  />} />
          <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/" element={<Home setIsAuthenticated={setIsAuthenticated}/>} />
          <Route path="/about" element={<About setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/faq" element={<FaqPage setIsAuthenticated={setIsAuthenticated}/>}/>
          <Route path="/orders" element={<OrderForm isAuthenticated={isAuthenticated}/>}/>
          <Route path="/ordercard" element={<OrderCard isAuthenticated={isAuthenticated}/>}/>

          {/* {isAuthenticated && (
            <>
            <Route path="/ordercard" element={<OrderCard token={token} isAuthenticated={isAuthenticated} userId={userId} email={email}/>}/>
            </>
          )} */}
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
