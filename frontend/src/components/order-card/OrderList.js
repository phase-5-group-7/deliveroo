import React, { useEffect, useState } from "react";
import './OrderList.css'
import 'bootstrap/dist/css/bootstrap.css';
import { TiDeleteOutline } from 'react-icons/ti';
import { MdEditLocationAlt } from 'react-icons/md';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import {MdDeleteOutline,MdOutlineEdit} from 'react-icons/md'

function OrderList() {
    const navigate = useNavigate();
    const [allOrders, setAllOrders] = useState([]);
    const [orders, setOrders] = useState([]);
    const token = localStorage.getItem("token")

    const [pageSize,setPageSize] = useState(5)
    const [orderPage,setOrderPage] = useState(1)

    useEffect(() => {
        axios.get("https://deliveroo-backend-api.onrender.com/orders", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        },)
            .then((res) => {
                if (res.data) {
                    setAllOrders(res.data)
                    // setOrders(res.data.splice(0,pageSize));
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
        setOrders(current.slice(0,pageSize));
    },allOrders)

   


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

    function moreDetails(id){
        navigate(`/ordercard/${id}`);
    }

    function nextPage(){
        setOrderPage(orderPage+1)

        const startIndex = (orderPage)*pageSize
        const endIndex = startIndex + pageSize

        setOrders(allOrders.slice(startIndex,endIndex))
    }

    function prevPage(){
        setOrderPage(orderPage-1)

        const startIndex = (orderPage-2)*pageSize
        const endIndex = startIndex + pageSize
    
        setOrders(allOrders.slice(startIndex,endIndex))
    }

    useEffect(() => {

    },orderPage)

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
                            <div style={{display:"flex",alignItems: "center",gap:"4px"}}>
                            <MdOutlineEdit className="action_icon"/>
                            <MdDeleteOutline className="action_icon"/>
                            
                            <p onClick={() => moreDetails(order.id)} className="action_icon_text" style={{fontSize:"14px"}} color='link' rounded size='sm'>
                                View details
                            </p>
                            </div>
                            
                        </td>
                    </tr>
      
          
            {/* <div key={order.id} className="card" style={{width: "18rem"}}>
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
            </div> */}
                </>
           

            
              )) : (
                <p>No orders found.</p>
            )}



    

                </MDBTableBody>
                

        </MDBTable>

         <div className="table_button_container">
         <button class="previous_button" onClick={prevPage} type="button">prev</button>

        <p className="page_number">{orderPage}</p>      
         <button class="next_button" onClick={nextPage} type="button">next</button>
                  
        </div>           
   
        </div>
    )
}

export default OrderList

