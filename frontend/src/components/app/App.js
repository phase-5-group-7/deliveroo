import {React, useState} from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom';

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

  // const navigate = useNavigate()

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);
  const [email, setEmail] = useState(null);
  // const [email, setEmail] = useState("");
  const [token, setToken] = useState(null);
  // const [error, setError] = useState(null);

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const formData = new FormData(form);
  //   axios.post('http://localhost:3000/login', formData)
  //     .then(response => {
  //       const { token, user } = response.data;
  //       setToken(token);
  //       setIsAuthenticated(true);
  //       setEmail(user.email);
  //       setUserId(user.id);
  //       navigate('/ordercard');
  //     })
  //     .catch(error => {
  //       if (error.response && error.response.status === 401) {
  //         alert("Invalid email or password");
  //       } else {
  //         alert("An error occurred. Please try again later.");
  //       }
  //     });
  // };

  // console.log(userId);
  // console.log(email);
  // console.log(token);

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
