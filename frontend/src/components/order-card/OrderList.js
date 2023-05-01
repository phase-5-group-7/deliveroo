import React, { useEffect, useState } from "react";
import './OrderList.css'
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { MdDeleteOutline, MdOutlineEdit } from 'react-icons/md'

function OrderList() {
    const navigate = useNavigate();
    const [allOrders, setAllOrders] = useState([]);
    const [orders, setOrders] = useState([]);
    const token = localStorage.getItem("token")

    const [pageSize, setPageSize] = useState(5)
    const [orderPage, setOrderPage] = useState(1)

    useEffect(() => {
        axios.get("https://deliveroo-backend-api.onrender.com/orders", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        },)
            .then((res) => {
                if (res.data) {
                    setAllOrders(res.data)
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


    useEffect(() => {
        let current = allOrders
        setOrders(current.slice(0, pageSize));
    }, allOrders)




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
                    setOrders(orders.filter((order) => order.id !== id))
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

    function moreDetails(id) {
        navigate(`/ordercard/${id}`);
    }

    function nextPage() {
        setOrderPage(orderPage + 1)

        const startIndex = (orderPage) * pageSize
        const endIndex = startIndex + pageSize

        setOrders(allOrders.slice(startIndex, endIndex))
    }

    function prevPage() {
        setOrderPage(orderPage - 1)

        const startIndex = (orderPage - 2) * pageSize
        const endIndex = startIndex + pageSize

        setOrders(allOrders.slice(startIndex, endIndex))
    }

    useEffect(() => {

    }, orderPage)

    return (

        <div className="table_container">

            <MDBTable align='middle'>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>Order Number</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Recipient</th>
                        <th scope='col'>Status</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody >

                    {orders && orders.length > 0 ? orders.map(order => (
                        <>


                            <tr key={order.id}>
                                <td>
                                    <p className='table_text'>{order.id}</p>
                                </td>
                                <td>
                                    <div className='d-flex align-items-center'>
                                        <div className='ms-3'>
                                            <p className='table_text'>{order.name}</p>
                                            <p className='table_text table_sub_text'>{order.pick_up}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className='d-flex align-items-center'>
                                        <div className='ms-3'>
                                            <p className='table_text'>{order.recepient_name}</p>
                                            <p className='table_text table_sub_text'>{order.delivery_drop_off}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>

                                    <p className="status_badge"> {order.order_status}</p>

                                </td>

                                <td >
                                    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                        <MdOutlineEdit onClick={() => handleUpdate(order.id)} className="action_icon" />
                                        <MdDeleteOutline onClick={() => handleDelete(order.id)} className="action_icon" />

                                        <p onClick={() => moreDetails(order.id)} className="action_icon_text" style={{ fontSize: "14px" }} color='link' rounded size='sm'>
                                            View details
                                        </p>
                                    </div>

                                </td>
                            </tr>


                        </>



                    )) : (
                        <p>No orders found.</p>
                    )}





                </MDBTableBody>


            </MDBTable>

            <div className="table_button_container">
                <button className="previous_button" onClick={prevPage} type="button">prev</button>

                <p className="page_number">{orderPage}</p>
                <button className="next_button" onClick={nextPage} type="button">next</button>

            </div>

        </div>
    )
}

export default OrderList

