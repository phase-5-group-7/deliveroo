import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container" >
      <h1 className="about-title">About Us</h1>

      <h3 className="title">History</h3>
      <p className="about">Deliveroo is an online delivery company.Deliveroo was founded in 2020 after the covid-19 pandemic hit. We saw an opportunity to help households and business be able to still be able to buy and receive the most basic of things. It came at a time when people were concerned about their safety but still need to conduct business to earn a living.</p>
      
      <h3 className="title">Mission</h3>
      <p className="about">Our mission is to make it possible for households and businesses to send and receives parcels in an easy, quick and convenient way.</p>

      <h3 className="title">Services</h3>
      <p className="about">We offer Express Delivery that can be delivered in the shortest time possible and Budget Delivery which gives consumer a cost friendly option to send parcels</p>

      <h3 className="title">Technology</h3>
      <p className="about">We services can be transacted online or physically. We have tracking to keep up to date with the delivery process</p>
      
      <p className="about-description">Check out our video below to learn more about Deliveroo:</p>
      <div className="about-video">
        <iframe title="about-video" width="560" height="315" src="https://www.youtube.com/embed/PQZgMz_tsO8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    </div>
  );
}

export default About;
