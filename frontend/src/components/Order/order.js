import React, { useState } from 'react';
import '../Order/order.css'

function OrderForm() {
  const [order, setOrder] = useState({
    name: '',
    phoneNumber: '',
    dropOff: '',
    recipientName: '',
    recipientPhoneNumber: '',
    pickUp: '',
    description: '',
    weight: '',
    distance: '',
    estimatedTime: '',
    price: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setOrder((prevOrder) => ({
      ...prevOrder,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(order);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={order.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Phone Number:
        <input
          type="tel"
          name="phoneNumber"
          value={order.phoneNumber}
          onChange={handleChange}
        />
      </label>
      <label>
        Drop-off:
        <input
          type="text"
          name="dropOff"
          value={order.dropOff}
          onChange={handleChange}
        />
      </label>

      <h2>Recipient</h2>
      <label>
        Name:
        <input
          type="text"
          name="recipientName"
          value={order.recipientName}
          onChange={handleChange}
        />
      </label>
      <label>
        Phone Number:
        <input
          type="tel"
          name="recipientPhoneNumber"
          value={order.recipientPhoneNumber}
          onChange={handleChange}
        />
      </label>
      <label>
        Pick-up:
        <input
          type="text"
          name="pickUp"
          value={order.pickUp}
          onChange={handleChange}
        />
      </label>

      <h2>Package</h2>
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={order.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Weight:
        <input
          type="text"
          name="weight"
          value={order.weight}
          onChange={handleChange}
        />
      </label>
      <label>
        Distance:
        <input
          type="text"
          name="distance"
          value={order.distance}
          onChange={handleChange}
        />
      </label>
      <label>
        Estimated Time:
        <input
          type="text"
          name="estimatedTime"
          value={order.estimatedTime}
          onChange={handleChange}
        />
      </label>
      <label>
        Price:
        <input
          type="text"
          name="price"
          value={order.price}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default OrderForm;


