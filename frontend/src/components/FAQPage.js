import React from 'react'

function FAQPage() {
  return (
    <div className="faq-container">
      <h1>FAQ</h1>
      <input type="text" placeholder="Search..." />
      <div className="faq-section">
        <h2>General Questions</h2>
        <div className="faq-question">
          <h3>How do i place an order?</h3>
          <div className="faq-answer">
            <li>Login to your account
              <li>Fill out the required details
                <li>Place your order</li>
              </li>
            </li>
          </div>
        </div>
        <div className="faq-question">
          <h3>How long does it take to send a parcel?</h3>
          <div className="faq-answer">
          </div>
          <li>This depend on the distance between the pick up and drop off</li>
        </div>
      </div>
      <div className="faq-section">
        <div className="faq-question">
          <div className="faq-answer">
          </div>
        </div>
        <div className="faq-question">
          <h3>What are the payment options?</h3>
          <div className="faq-answer">
          </div>
          <li>Mpesa</li>
          <li>Cash</li>
        </div>
      </div>
    </div>
  );
}

export default FAQPage;