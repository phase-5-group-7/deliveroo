import React from "react";
import './OrderCard.css'
import 'bootstrap/dist/css/bootstrap.css';
import { TiDeleteOutline } from 'react-icons/ti';
import { MdEditLocationAlt } from 'react-icons/md';

function OrderCard() {

    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Order</h5>

                    <h6 className="card-subtitle mb-2">User</h6>
                    <ul className="list">
                        <li className="list-item">Name: <span></span></li>
                        <li className="list-item">Phone Number: <span></span></li>
                        <li className="list-item">Drop-off: <span></span></li>
                    </ul>

                    <h6 className="card-subtitle mb-2"> Recipient</h6>
                    <ul className="list">
                        <li className="list-item">Name: <span></span></li>
                        <li className="list-item">Phone Number: <span></span></li>
                        <li className="list-item">Pick-up: <span></span></li>
                    </ul>

                    <h6 className="card-subtitle mb-2">Package</h6>
                    <ul className="list">
                        <li className="list-item">Description: <span></span></li>
                        <li className="list-item">Weight: <span></span></li>
                        <li className="list-item">Distance: <span></span></li>
                        <li className="list-item">Estimated Time: <span></span></li>
                        <li className="list-item">Price: <span></span></li>
                    </ul>

                    <h6 className="card-subtitle mb-2">Status: <span></span><span></span></h6>

                    <button className="order-icon"><TiDeleteOutline/></button>
                    <button className="order-icon"><MdEditLocationAlt/></button>
                </div>
            </div>
        </div>
    )
}

export default OrderCard