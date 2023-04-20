import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Deliveroo</h1>
      <p className="about-description">Deliveroo is an online delivery company. Our mission is to bring you the best delivery app ever.</p>
      <p className="about-description">Check out our video below to learn more about Deliveroo:</p>
      <div className="about-video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/PQZgMz_tsO8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    </div>
  );
}

export default About;
