import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from 'react-router-dom';
import './OrderList.css'
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete"
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
    ComboboxOptionText,
  } from "@reach/combobox";
  import "@reach/combobox/styles.css";


function UpdateOrder() {
    const [order, setOrder] = useState([]);
    const {id} = useParams();
  

    useEffect(() => {
       
        const token = localStorage.getItem("token")
            
            
        }, [])



  const handleChange = (event) => {
    const { name, value } = event.target;
    setOrder((prevOrder) => ({
      ...prevOrder,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    const token = localStorage.getItem("token")

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
    axios
      .patch(
        `https://deliveroo-backend-api.onrender.com/orders/${id}`, 
        order,
        config
        )
        .then((res) => {
          console.log(res)
          if (res.status === 200) {
            console.log("Order update successfully:", res);
          } else {
            alert("Failed to update order")
          }
        })
        .catch((error) => {
          console.error("Error updating order:", error);
        })  
    
  }


    return (
        <div>
        <div key={order.id} className="card" style={{width: "58rem"}}>
            <div className="card-body">
                <h5 className="card-title">Order</h5>

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
                    name="phone_number"
                    value={order.phone_number}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Pick_up:
                  
                  {/* <PlacesAutocomplete type={setPickUp} setSeleted={setSeleted} /> */}
                </label>
                <h2>Recipient</h2>
                <label>
                  Name:
                  <input
                    type="text"
                    name="recepient_name"
                    value={order.recepient_name}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Phone Number:
                  <input
                    type="tel"
                    name="recepient_phone_no"
                    value={order.recepient_phone_no}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Drop_off:
                  
                  {/* <PlacesAutocomplete type={setDeliveryDropOff} setSeleted={setSeleted} /> */}
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
                    type="number"
                    name="weight"
                    value={order.weight}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Distance:
                  <input
                    type="number"
                    name="distance"
                    value={order.distance}
                    onChange={handleChange}
                  />
                </label>
               
               
                <button type="submit" onClick={handleSubmit}>Submit</button>
              </form>
            </div>

                <h6 className="card-subtitle mb-2">Status: <span id="status">{order.order_status}</span></h6>

            </div>
        </div>
    </div>
    )
}

export default UpdateOrder


const PlacesAutocomplete = ({ type,setSeleted }) => {
    const {
      ready,
      value,
      setValue,
      suggestions: { status, data },
      clearSuggestions,
    } = usePlacesAutocomplete();
  
    const handleSelect = async (address) => {
      setValue(address, false)
      clearSuggestions();
      type(address)
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0])
      // setSeleted()
  
      setSeleted(current => [...current, { lat, lng }])
    }
  
    return <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
      />
  
      <ComboboxPopover>
  
        <ComboboxList>
          {status === "OK" && data.map(({ place_id, description }) =>
            <ComboboxOption key={place_id} value={description} />
          )}
        </ComboboxList>
  
      </ComboboxPopover>
  
    </Combobox>
  }
  