import React, { useState } from 'react';
import '../Order/order.css';

function OrderForm() {
  const [order, setOrder] = useState({
    phone_number: "",
    recepient_name: "",
    recepient_phone_no: "",
    description: "",
    weight: "",
    delivery_drop_off: "",
    pick_up: "",
    distance: "",
    routes: "",
    routeamount: ""
  });

  const handleChange = (event) => {

  //   const token = localStorage.getItem("token")
        
  //       axios.post("http://localhost:3000/orders", {
  //           headers: {
  //               Authorization: `Bearer ${token}`
  //           }
  //           })
  //           .then((res) => {
  //               if (res) {
  //                   setOrders(res.data.user.orders);
  //                   console.log(res.data);
  //               } else {
  //                   alert("An error occurred while fetching orders")
  //               }
  //           })
  //           .catch(error => {
  //           console.error(error);
  //           alert("An error occurred while fetching orders.")
  //       })
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
            value={order.name}
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
          Routes:
          <input
            type="text"
            name="routes"
            value={order.routes}
            onChange={handleChange}
          />
        </label>
        <label>
          Route Amount:
          <input
            type="text"
            name="estimatedTime"
            value={order.routeamount}
            onChange={handleChange}
          />
        </label>
        {/* <label>
          Price:
          <input
            type="text"
            name="price"
            value={order.price}
            onChange={handleChange}
          />
        </label> */}
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
export default OrderForm;





