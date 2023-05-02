import React, { useEffect, useState } from "react";
import './OrderList.css'
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

function OrderCard(orderDetails) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [order, setOrder] = useState([]);
    const token = localStorage.getItem("token")

    useEffect(() => {
        setOrder(orderDetails.details[0])
    }, [])


    function handleCloseDetails() {
        orderDetails.closeModal(null)
    }


    return (
        <>
            <div key={order.id} className="card" style={{}}>
                <div className="order_card_header">
                    <p className="order_card_title">Order No: <span>{order.id}</span></p>

                    <p className="status_badge"> {order.order_status}</p>

                </div>
                <div className="order_card_container">

                    <div className="order_card_section">

                        <h6 className="card-subtitle mb-2">User </h6>

                        <p className="order_label">
                            Name
                        </p>
                        <p className="order_text">
                            {order.name}
                        </p>
                        <hr className="line" />

                        <p className="order_label">
                            User Id
                        </p>
                        <p className="order_text">
                            {order.user_id}
                        </p>
                        <hr className="line" />

                        <p className="order_label">
                            Phone Number
                        </p>
                        <p className="order_text">
                            {order.phone_number}
                        </p>
                        <hr className="line" />

                        <p className="order_label">
                            Drop-off
                        </p>
                        <p className="order_text">
                            {order.delivery_drop_off}
                        </p>
                        <hr className="line" />

                    </div>
                    <div className="order_card_section">

                        <h6 className="card-subtitle mb-2">Recipient </h6>

                        <p className="order_label">
                            Name
                        </p>
                        <p className="order_text">
                            {order.recepient_name}
                        </p>
                        <hr className="line" />

                        <p className="order_label">
                            Phone Number
                        </p>
                        <p className="order_text">
                            {order.recepient_phone_no}
                        </p>
                        <hr className="line" />

                        <p className="order_label">
                            Pick up
                        </p>
                        <p className="order_text">
                            {order.pick_up}
                        </p>
                        <hr className="line" />


                    </div>
                    <div className="order_card_section">


                        <h6 className="card-subtitle mb-2">Package </h6>

                        <p className="order_label">
                            Description
                        </p>
                        <p className="order_text">
                            {order.description}
                        </p>
                        <hr className="line" />

                        <p className="order_label">
                            Weight
                        </p>
                        <p className="order_text">
                            {order.weight}
                        </p>
                        <hr className="line" />

                        <p className="order_label">
                            Distance
                        </p>
                        <p className="order_text">
                            {order.distance} km
                        </p>
                        <hr className="line" />

                        <p className="order_label">
                            Duration
                        </p>
                        <p className="order_text">
                            {order.duration}
                        </p>
                        <hr className="line" />

                        <p className="order_label">
                            Price
                        </p>
                        <p className="order_text">
                            Ksh {order.price}
                        </p>
                        <hr className="line" />

                    </div>

                </div>
                <div className="close">
                    <button className="next_button" onClick={() => handleCloseDetails()}>Close Details</button>
                </div>



            </div>

        </>
    )
}

export default OrderCard

