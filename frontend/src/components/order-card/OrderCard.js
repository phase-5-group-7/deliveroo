import React, { useEffect, useState } from "react";
import './OrderList.css'
import 'bootstrap/dist/css/bootstrap.css';
import { TiDeleteOutline } from 'react-icons/ti';
import { MdEditLocationAlt } from 'react-icons/md';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

function OrderList() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [order, setOrder] = useState([]);
    const token = localStorage.getItem("token")
    useEffect(() => {


        axios.get(`https://deliveroo-backend-api.onrender.com/orders/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        },)
            .then((res) => {
                if (res.data) {
                    setOrder(res.data);
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


    function handleDelete(id) {

        fetch(`https://deliveroo-backend-api.onrender.com/orders/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                if (res.ok) {
                    console.log(res)
                    // setOrders(orders.filter((order) => order.id !== id))
                } else {
                    console.log(`Already Delivered`)
                }
            })
            .catch(error => {
                console.error(error);
                alert("An error occurred while fetching orders.")
            })
    }


    function handleUpdate(id) {

        navigate(`/updateorder/${id}`);
    }

    return (
        <>
        <div key={order.id} className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Order No: <span>{order.id}</span></h5>

                    <h6 className="card-subtitle mb-2">User Id: <span>{order.user_id}</span></h6>
                    <ul className="list">
                        <li className="list-item">Name: <span>{order.name}</span></li>
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
                        <li className="list-item">Duration: <span>{order.duration}</span></li>
                        <li className="list-item">Price: ksh <span>{order.price}</span></li>
                    </ul>

                    <h6 className="card-subtitle mb-2">Status: <span id="status">{order.order_status}</span></h6>

                    <button onClick={() => handleDelete(order.id) } className="order-icon"><TiDeleteOutline/></button>
                    
                
                   <button onClick={() => handleUpdate(order.id) } className="order-icon"><MdEditLocationAlt/>
                   </button>
        
                   
                   
                </div>
            </div>
        
        </>
    )
}

export default OrderList

