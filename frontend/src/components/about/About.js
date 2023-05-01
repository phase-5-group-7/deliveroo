import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container" >
      {/* <h1 className="about-title">About Us</h1> */}



      <div className='secondary_container'>
        <div className='block block_one'>
          <p className='block_text'>History</p>
        </div>
        <div className='block'>

          <p className="about">Deliveroo is an online delivery company.Deliveroo was founded in 2020 after the covid-19 pandemic hit. We saw an opportunity to help households and business be able to still be able to buy and receive the most basic of things.</p>
        </div>

      </div>

      <div className='secondary_container'>

        <div className='block'>

          <p className="about">Our mission is to make it possible for households and businesses to send and receives parcels in an easy, quick and convenient way.</p>
        </div>

        <div className='block block_two'>
          <p className='block_text'>Mission</p>
        </div>

      </div>


      <div className='secondary_container'>

        <div className='block block_three'>
          <p className='block_text'>Services</p>
        </div>

        <div className='block'>

          <p className="about">We offer Express Delivery that can be delivered in the shortest time possible and Budget Delivery which gives consumer a cost friendly option to send parcels</p>
        </div>



      </div>


      <div className='secondary_container'>

        <div className='block'>

          <p className="about">We services can be transacted online or physically. We have tracking to keep up to date with the delivery process</p>
        </div>

        <div className='block block_four'>
          <p className='block_text'>Technology</p>
        </div>

      </div>


      <p className="about-description">Check out our video below to learn more about Deliveroo:</p>
      <div className="about-video">
        <iframe title="about-video" width="560" height="315" src="https://www.youtube.com/embed/PQZgMz_tsO8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    </div>
  );
}

export default About;
