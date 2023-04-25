import React from 'react'
import './Faq.css'

function FaqPage() {
  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>

      <div className="faq-section">

        <div className="faq-question">
          <h3>How do i place an order?</h3>
          <div className="faq-answer">
            <ul>
              <li>Login to your account</li>
              <li>Fill out the required details</li>
              <li>Place your order</li>
            </ul>
          </div>
        </div>

        <div className="faq-question">
          <h3>How long does it take to send a percel?</h3>
          <div className="faq-answer">
            <ul>
              <li>This depend on the distance between the pick up and drop off</li>
            </ul>
          </div>
        </div>

        <div className="faq-question">
          <h3>What are the payment options?</h3>
          <div className="faq-answer">
            <ul>
              <li>Mpesa</li>
              <li>Cash</li>
            </ul>
          </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default FaqPage;