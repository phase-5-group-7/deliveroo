import React, { useEffect, useState } from "react";
import './OrderCard.css'
import 'bootstrap/dist/css/bootstrap.css';
import { TiDeleteOutline } from 'react-icons/ti';
import { MdEditLocationAlt } from 'react-icons/md';
import axios from "axios";

function OrderCard() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token")
        
        axios.get("http://localhost:3000/orders", {
            headers: {
                Authorization: `Bearer ${token}`
            }
            },)
            .then((res) => {
                if (res.data) {
                    setOrders(res.data);
                    console.log(res.data);
                } else {
                    alert("An error occurred while fetching orders")
                }
            })
            .catch(error => {
            console.error(error);
            alert("An error occurred while fetching orders.")
        })
    }, [])
   
    
    return (
        <div>
            {orders && orders.length > 0 ? orders.map(order => (
            <div key={order.id} className="card" style={{width: "18rem"}}>
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
                        <li className="list-item">Weight: <span>{order.weight}kg</span></li>
                        <li className="list-item">Distance: <span>{order.distance}km</span></li>
                        <li className="list-item">Route: <span>{order.routes}</span></li>
                        <li className="list-item">Route Amount: ksh <span>{order.routeamount}</span></li>
                        <li className="list-item">Price: ksh <span>{order.price}</span></li>
                    </ul>

                    <h6 className="card-subtitle mb-2">Status: <span id="status">{order.order_status}</span></h6>

                    <button className="order-icon"><TiDeleteOutline/></button>
                    <button className="order-icon"><MdEditLocationAlt/></button>
                </div>
            </div>
              )) : (
                <p>No orders found.</p>
            )}
        </div>
    )
}

export default OrderCard