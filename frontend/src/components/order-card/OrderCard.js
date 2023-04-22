import React, { useEffect, useState } from "react";
import './OrderCard.css'
import 'bootstrap/dist/css/bootstrap.css';
import { TiDeleteOutline } from 'react-icons/ti';
import { MdEditLocationAlt } from 'react-icons/md';
import axios from "axios";

function OrderCard() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const handleOrder = async () => {
            try {
              const response = await axios.get("http://localhost:3000/orders", {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`
                }
              });
              const orders = response.data;
              setOrders(orders)
              console.log(orders);
            } catch (error) {
              console.error(error);
              alert("An error occurred while fetching orders.");
            }
          }
          handleOrder()
    }, [])
   
    
    return (
        <div>
            {orders.map(order => (
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Order</h5>

                    <h6 className="card-subtitle mb-2">User</h6>
                    <ul className="list">
                        <li className="list-item">Name: <span>{order.username}</span></li>
                        <li className="list-item">Phone Number: <span>{order.phone_number}</span></li>
                        <li className="list-item">Drop-off: <span>{order.delivery_drop_off}</span></li>
                    </ul>

                    <h6 className="card-subtitle mb-2"> Recipient</h6>
                    <ul className="list">
                        <li className="list-item">Name: <span>{order.recepient_name}</span></li>
                        <li className="list-item">Phone Number: <span>{order.recepient_phone_no}</span></li>
                        <li className="list-item">Pick-up: <span>{order.pick_up}</span></li>
                    </ul>

                    <h6 className="card-subtitle mb-2">Package</h6>
                    <ul className="list">
                        <li className="list-item">Description: <span>{order.description}</span></li>
                        <li className="list-item">Weight: <span>{order.weight}</span></li>
                        <li className="list-item">Distance: <span>{order.distance}</span></li>
                        <li className="list-item">Route: <span>{order.routes}</span></li>
                        <li className="list-item">Estimated Time: <span>{order.routeamount}</span></li>
                        <li className="list-item">Price: <span>{order.price}</span></li>
                    </ul>

                    <h6 className="card-subtitle mb-2">Status: <span>{order.order_status}</span></h6>

                    <button className="order-icon"><TiDeleteOutline/></button>
                    <button className="order-icon"><MdEditLocationAlt/></button>
                </div>
            </div>
            ))}
        </div>
    )
}

export default OrderCard