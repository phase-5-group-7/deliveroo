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
import UpdateOrder from '../order-card/UpdateOrder';

function App() {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null)

  const [values, setValues] = useState({
    email: "",
    password: ""
  })



  const handleSubmit = (event) => {
    event.preventDefault();
    // setIsAuthenticated(true);
    axios
      .post("http://localhost:3000/login", {
          email: values.email,
          password: values.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.jwt)
        localStorage.setItem("user_id", res.data.user.id)
        setUserId(res.data.user.id)
        // window.location.href = "/";
        console.log(res)
        console.log(res.data.user.id)

      })
      .catch(error => {
        console.error(error)
        alert("An error occurred during login.")
      })
  };
  // const token = localStorage.getItem("token")

  return (
    <div className="App">
        <Navbar setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />
        <Routes>
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} setValues={setValues} values={values} handleSubmit={handleSubmit} setUserId={userId} />} />
          <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/" element={<Home setIsAuthenticated={setIsAuthenticated}/>} />
          <Route path="/about" element={<About setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/faq" element={<FaqPage setIsAuthenticated={setIsAuthenticated}/>}/>
          <Route path="/orders" element={<OrderForm isAuthenticated={isAuthenticated} userId={userId}/>}/>
          <Route path="/ordercard" element={<OrderCard isAuthenticated={isAuthenticated} userId={userId}/>}/>
          <Route path="/updateorder/:id" element={<OrderForm isAuthenticate=
          {isAuthenticated} userId={userId}/>}/>

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
