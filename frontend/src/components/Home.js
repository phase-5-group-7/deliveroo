import React from 'react';
import '../components/Home.css'

function Home() {
  return (
    <div>
      <h1>Welcome to Deliveroo</h1>
      <p>Order food delivery from your favorite restaurants with Deliveroo. Enjoy a variety of cuisines, from local favorites to international classics.</p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6bhz0Y7tgLnaoYPWtT-A34UgiZArWBJu_mgwMXgvmBg&s" alt="Deliveroo" />
      <p>Deliveroo is the go-to platform for food delivery from the best restaurants near you. With our user-friendly app and website, you can easily find restaurants, browse menus, and place an order for delivery or pickup. Our mission is to make it simple for you to enjoy great food whenever you want, wherever you are.</p>
      <ul>
        <li>Find restaurants near you</li>
        <li>Explore menus and reviews</li>
        <li>Place an order for delivery or pickup</li>
      </ul>
    </div>
  );
}

export default Home;
