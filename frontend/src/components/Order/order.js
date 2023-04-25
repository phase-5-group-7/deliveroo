import React, { useState } from 'react';
import '../Order/order.css';

function OrderForm() {
  const [order, setOrder] = useState({
    phone_number: '',
    delivery_drop_off: '', 
    recepient_name: '',
    recepient_phone_no: '',
    pick_up: '',
    description: '',
    weight: '',
    distance: '',
    routes: '',
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
    <div className="card">
      <form onSubmit={handleSubmit}>
        <h2>User</h2>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={order.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={order.phone_number}
            onChange={handleChange}
          />
        </label>
        <label>
          Drop-off:
          <input
            type="text"
            name="dropOff"
            value={order.delivery_drop_off}
            onChange={handleChange}
          />
        </label>

        <h2>Recipient</h2>
        <label>
          Name:
          <input
            type="text"
            name="recipientName"
            value={order.recepient_name}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            name="recipientPhoneNumber"
            value={order.recepient_phone_no}
            onChange={handleChange}
          />
        </label>
        <label>
          Pick-up:
          <input
            type="text"
            name="pickUp"
            value={order.pick_up}
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
    </div>
  );
}

export default OrderForm;