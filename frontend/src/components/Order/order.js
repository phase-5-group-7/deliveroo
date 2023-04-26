import React, { useState, useMemo, useEffect } from 'react';
import { GoogleMap, Marker, useLoadScript, LoadScript } from "@react-google-maps/api";
import '../Order/order.css';
import axios from 'axios';
import env from "react-dotenv";
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
import Map from "./Map";
import {useParams} from 'react-router-dom';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const lib = ["places"];
const key = "AIzaSyDz2zx3bpHyh-ZpLHijapk9S4jXwsK0GZE";



function OrderForm() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDz2zx3bpHyh-ZpLHijapk9S4jXwsK0GZE",
    libraries: ["places", "geometry"]
  });
  const {id} = useParams();


  

  const [deliveryDropOff,setDeliveryDropOff] = useState(null)
  const [distance, setDistance] = useState(null);
  const [pickUp, setPickUp] = useState(null);
 
  const [order, setOrder] = useState({
    name: "",
    phone_number: "",
    recepient_name: "",
    recepient_phone_no: "",
    description: "",
    weight: "",
    delivery_drop_off: "",
    pick_up: "",
    distance: "",
    user_id: ""
  });

  const [selected, setSeleted] = useState([])


  useEffect(() => {
    if(deliveryDropOff != null){
      setOrder((prevOrder) => ({
        ...prevOrder,
        ["delivery_drop_off"]: deliveryDropOff,
      }));
    }

    if(pickUp != null){
      setOrder((prevOrder) => ({
        ...prevOrder,
        ["pick_up"]: pickUp,
      }));
    }

    if(distance != null) {
      setOrder((prevOrder) => ({
        ...prevOrder,
        ["distance"]: distance,
      })); 
    }

  }, [deliveryDropOff,pickUp,distance])


  const handleChange = (event) => {
    const { name, value } = event.target;
    setOrder((prevOrder) => ({
      ...prevOrder,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    const token = localStorage.getItem("token")
    const user_id = localStorage.getItem("user_id")
   
    event.preventDefault();

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }

    if(id == null){
      axios
      .post(
        "http://localhost:3000/orders", 
        order,
        config
        )
        .then((res) => {
          console.log(res)
          if (res.status === 201) {
            console.log("Order created successfully:", res);
            setOrder({
              name: "",
              phone_number: "",
              recipient_name: "",
              recipient_phone_no: "",
              description: "",
              weight: "",
              delivery_drop_off: "",
              pick_up: "",
              user_id: "",
            });
          } else {
            alert("Failed to create order")
          }
        })
        .catch((error) => {
          console.error("Error creating order:", error);
        })  
    } else {
      axios.patch(
        `http://localhost:3000/orders/${id}`, 
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

    
    
  }

  const [travelData, setTravelData] = useState(null);
  

  const setData = (travelData) => {
    setTravelData(travelData);
    console.log(travelData)
    if (travelData != null) {
      if (travelData.distance != null) {
        const distanceWithoutUnit = travelData.distance.text.replace(" km", "");
        setDistance(distanceWithoutUnit);
      }

    }
  };


  if(id !== undefined && order.name == ""){
    const token = localStorage.getItem("token")
  
    axios.get(`http://localhost:3000/orders/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
        },)
        .then((res) => {
            if (res.data) {
                setOrder(res.data);
                console.log(res.data);
                setDistance(res.data.distance)
            } else {
                alert("An error occurred while fetching orders")
            }
        })
        .catch(error => {
        console.error(error);
        alert("An error occurred while fetching orders.")
    })
  }

  return (
    <>
      <div className='main_container' >
        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <>
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


              {id == undefined ? 
                <>
                 <label>
                  Pick Up:
                  
                  <PlacesAutocomplete type={setPickUp} setSeleted={setSeleted} />
                </label>
                </> : 
                <>
                <div style={{display:"flex",gap:"20px",width: "-webkit-fill-available"}}>
                  <label style={{width:"max-content"}}>Current pick up location</label>
                  <h4>{order.pick_up}</h4>
                </div>
                
                 <label>
                  New Pick Up:
                  
                  <PlacesAutocomplete type={setPickUp} setSeleted={setSeleted} />
                </label>
                </>
              }
               
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

                {id == undefined ? 
                <>
                 <label>
                 Drop off:
                  
                  <PlacesAutocomplete type={setDeliveryDropOff} setSeleted={setSeleted} />
                </label>
                </> : 
                <>
                <div style={{display:"flex",gap:"20px",width: "-webkit-fill-available"}}>
                  <label style={{width:"max-content"}}>Current drop off location</label>
                  <h4>{order.delivery_drop_off}</h4>
                </div>
                
                 <label>
                  New Drop off:
                  
                  <PlacesAutocomplete type={setDeliveryDropOff} setSeleted={setSeleted} />
                </label>
                </>
              }

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
                    value={distance}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  UserId:
                  <input
                    type="number"
                    name="user_id"
                    value={order.user_id}
                    onChange={handleChange}
                  />
                </label>
              
                <button type="submit" onClick={handleSubmit}>Submit</button>
              </form>
            </div>

            {window.google !== undefined && selected.length == 2 ?
              <Map
                origin={selected[0]}
                destination={selected[1]}
                setData={setData}
              /> :
              <> </>}

          </>



        )}

      </div>

    </>
  );
}
export default OrderForm;


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




