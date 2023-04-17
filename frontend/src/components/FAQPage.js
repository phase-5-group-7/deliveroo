import React from 'react'
import '../index.css'

function FAQPage() {
  return (
    <div className="faq-container">
      <h1>FAQ</h1>
      <input type="text" placeholder="Search..." />
      <div className="faq-section">
        <h2>General Questions</h2>
        <div className="faq-question">
          <h3>How do I create an account?</h3>
          <div className="faq-answer">
            <p>Creating an account is easy! Simply click on the "Sign up" button in the top right corner of the screen and follow the prompts. You will need to provide your name, email address, and create a password. Once you have completed these steps, your account will be created.</p>
          </div>
        </div>
        <div className="faq-question">
          <h3>How do I change my password?</h3>
          <div className="faq-answer">
            <p>To change your password, click on the "Settings" button in the top right corner of the screen and select "Change Password" from the dropdown menu. Follow the prompts to update your password.</p>
          </div>
        </div>
      </div>
      <div className="faq-section">
        <h2>Ordering Questions</h2>
        <div className="faq-question">
          <h3>How do I place an order?</h3>
          <div className="faq-answer">
            <p>To place an order, simply select the items you would like to order and click "Add to Cart". Once you have added all of your items to your cart, click "Checkout" and follow the prompts to complete your order.</p>
          </div>
        </div>
        <div className="faq-question">
          <h3>Can I cancel my order?</h3>
          <div className="faq-answer">
            <p>Unfortunately, we are unable to cancel orders once they have been placed. If you have any concerns about your order, please contact customer support.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQPage;