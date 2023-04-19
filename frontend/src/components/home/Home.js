import React from 'react';
import './Home.css';
import image from './homepage-image.png'
import 'bootstrap/dist/css/bootstrap.css';


function Home() {
  return (
  <div>
    <div className="container">
      <div className="row">
        <div id="home" className="col-sm-5 col-md-8">
          <h1 id="welcome">Welcome to Deliveroo</h1>
          <p>Your smart choice parcel delivery service.
          Sign up to gain access to a quick and efficient delivery for your  personal use or business products</p>
          <button id="btn">Get Stated</button>
        </div>
        <div className="col-sm-5 offset-sm-2 col-md-4 offset-md-0">
          <img id="img" src={image} alt="Deliveroo" />
        </div>
      </div>
      
     
      {/* <div className="card-footer">
        <li>Find restaurants near you</li>
        <li>Explore menus and reviews</li>
        <li>Place an order for delivery or pickup</li>
      </div> */}
    </div>
  </div>
  );
}

export default Home;
