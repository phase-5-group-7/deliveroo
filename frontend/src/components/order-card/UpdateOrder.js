import React, {useState, useEffect} from "react";
import axios from "axios";

function UpdateOrder() {
    const [order, setOrder] = useState([]);


    useEffect(() => {
        const token = localStorage.getItem("token")
            
            axios.get("http://localhost:3000/orders", {
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

    return (
        <div>
        {/* <div key={order.id} className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">Order</h5>

                <h6 className="card-subtitle mb-2">User</h6>
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
                    <li className="list-item">Price: ksh <span>{order.price}</span></li>
                </ul>

                <h6 className="card-subtitle mb-2">Status: <span id="status">{order.order_status}</span></h6>

                <button onClick={() => handleUpdate(order.id) } className="order-icon">Submit</button>
            </div>
        </div> */}
    </div>
    )
}

export default UpdateOrder