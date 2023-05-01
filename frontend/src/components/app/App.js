import {React, useState} from 'react';
import { Routes, Route} from 'react-router-dom';

import Navbar from '../navbar/Navbar';
import Home from '../home/Home';
import About from '../about/About';
import Login from '../login/Login';
import Footer from '../footer/Footer';
import FaqPage from '../faq/FaqPage';
import Signup from '../signup/Signup';
import OrderList from '../order-card/OrderList';
import OrderForm from '../Order/order';
import OrderCard from "../order-card/OrderCard"
import axios from 'axios';

function App() {
  
  const [isAuthenticated, setIsAuthenticated] = useState("true");
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null)
  const [admin, setAdmin] = useState(null)

  const [values, setValues] = useState({
    email: "",
    password: "",
  })


  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/login", {
          email: values.email,
          password: values.password
      })
      .then((res) => {
        if (res.status === 202) {
        localStorage.setItem("token", res.data.jwt)
        localStorage.setItem("user_id", res.data.user.id)
        localStorage.setItem("admin", res.data.user.admin)

        const auth = localStorage.setItem("isAuthenticated", isAuthenticated)

        setUserId(res.data.user.id)
        setAdmin(res.data.user.admin)
        setIsAuthenticated(auth)

        if(res.data.user.admin){
          window.location.href = "/orderlist";
        } else{
          window.location.href = "/orders";
        }
        
        console.log("Sucessfully logged in")
        console.log(res.data)
        // console.log(res)
        } else {
          alert("Failed to Login")
        }
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          console.log(error.response.data.errors)
          setError(error.response.data.errors)
        } else {
          console.log("An error occurred. Please try again later.")
          setError("An error occurred. Please try again later.");
        }
      })
  };

  return (
    <div className="App">
        <Navbar setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} setadmin={admin} />
        <Routes>
          <Route path="/" element={<Home setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} admin={admin}/>} />
          <Route path="/about" element={<About setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/faq" element={<FaqPage setIsAuthenticated={setIsAuthenticated}/>}/>
          <Route path="/login" element={<Login error={error} setError={setError}setIsAuthenticated={setIsAuthenticated} setValues={setValues} values={values} handleLogin={handleLogin} setUserId={userId} setAdmin={setAdmin}/>} />
          <Route path="/signup" element={<Signup error={error} setError={setError} setIsAuthenticated={setIsAuthenticated} />} />
        {isAuthenticated && (
        <>
          <Route path="/orders" element={<OrderForm userId={userId} admin={admin}/>}/>
          <Route path="/orderlist" element={<OrderList userId={userId} admin={admin}/>}/>
          <Route path="/updateorder/:id" element={<OrderForm setAdmin={admin} userId={userId} admin={admin}/>}/> 
          <Route path="/ordercard/:id" element={<OrderCard userId={userId} admin={admin}/>}/>
          </>
          )
          }
           
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
