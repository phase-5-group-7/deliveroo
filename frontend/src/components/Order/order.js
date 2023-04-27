import React, { useState, useMemo, useEffect,LinearProgress } from 'react';
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
import { useParams } from 'react-router-dom';
import { ProgressBar } from './Progress';

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
  const { id } = useParams();

  const [deliveryDropOff, setDeliveryDropOff] = useState(null)
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
    if (deliveryDropOff != null) {
      setOrder((prevOrder) => ({
        ...prevOrder,
        ["delivery_drop_off"]: deliveryDropOff,
      }));
    }

    if (pickUp != null) {
      setOrder((prevOrder) => ({
        ...prevOrder,
        ["pick_up"]: pickUp,
      }));
    }

    if (distance != null) {
      setOrder((prevOrder) => ({
        ...prevOrder,
        ["distance"]: distance,
      }));
    }

  }, [deliveryDropOff, pickUp, distance])


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

    if (id == null) {
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


  if (id !== undefined && order.name == "") {
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

  var [section, setSection] = useState(1)
  var [percent, setPercent] = useState(33.3)

  const handleNextPage = (event) => {
    event.preventDefault()
    if (section !== 3) {
      setSection(section + 1)
      var percent= ((section + 1)/3) *100
      setPercent(percent)
    }
  }

  const handlePrevPage = (event) => {
    if (section !== 1) {
      setSection(section - 1)
      var percent= ((section - 1)/3) *100
      setPercent(percent)
    }
  }

  var [showMap,setShowMap] = useState(false)

  const handleToggleMap = (event) => {
    event.preventDefault()
    setShowMap(!showMap)
  }
  

  return (
    <>
      <div className='main_container' >
        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <div className="card">
              <header className='header_container'>
                <p className='header_text'>
                  {section === 1 ? <>User Details</> : <></>}
                  {section === 2 ? <>Recipient Details</> : <></>}
                  {section === 3 ? <>Package Details</> : <></>}
                </p>


              </header>
                  <ProgressBar percent={percent} end={percent > 90 ? true : false}/>
              <form onSubmit={handleSubmit}>
               
                {section === 1 ?
                  <div className='card_padding'>
                    {/* <h2>User</h2> */}
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
                          Pick Up:

                          <PlacesAutocomplete type={setPickUp} setSeleted={setSeleted} initial={order.pick_up} setOrder={setOrder} orderKey={"pick_up"} />
                    </label>
                  </div>
                  :
                  <></>

                }


                {section === 2 ?
                  <div className='card_padding'>
                    {/* <h2>Recipient</h2> */}
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
                          Drop off:

                          <PlacesAutocomplete type={setDeliveryDropOff} setSeleted={setSeleted} initial={order.delivery_drop_off} setOrder={setOrder} orderKey={"delivery_drop_off"} />
                    </label>
                  </div>
                  :
                  <></>

                }


                {section === 3 ?
                  <div className='card_padding'>
                    {/* <h2>Package</h2> */}
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

                  </div>
                  :
                  <></>

                }



                {
                  section == 2 && distance == null && selected.length == 2? 
                  <>

                    <div style={{display : "flex",gap:"10px",justifyContent:"flex-end",padding:"15px",width:"-webkit-fill-available"}}>
                      <button class="map_button" type="submit" onClick={handleToggleMap}>Show Map</button>
                    </div>
                  
                  </> 
                  : 
                  <>
                   <div  style={{display : "flex",width:"-webkit-fill-available",justifyContent: "space-between"}}>
                  <div style={{padding:"15px"}}>
                    {selected.length == 2 ?<button class="map_button" type="submit" onClick={handleToggleMap}>Show Map</button> : <></> }
                    
                  </div>
                 

                  <div style={{display : "flex",gap:"10px",justifyContent:"flex-end",padding:"15px"}}>
                    {section !== 1 ? <button class="previous_button" type="button" onClick={handlePrevPage}>Previous</button>:<></>}
                    

                    {section === 3 ?
                      <>
                        <button class="next_button" type="submit" onClick={handleSubmit}>Submit</button>
                      </>
                      :
                      <>
                        <button class="next_button" type="submit" onClick={handleNextPage}>Next</button>
                      </>

                    }
                  </div>

                </div>
                  </>
                }


               





              </form>
            </div>


            

            {window.google !== undefined && selected.length == 2 && showMap ?


              <div className='modal_container'>
                <div className='map_background'>
                  <div>
                  <Map
                      origin={selected[0]}
                      destination={selected[1]}
                      setData={setData}
                    />
                  </div>
                  <div className='close_map_container'>
                  <button class="next_button" type="submit" onClick={handleToggleMap}>Close Map</button>
                  </div>
                    

                </div>

              </div>
             
               :
              <> </>}

          </>



        )}

      </div>

    </>
  );
}
export default OrderForm;


const PlacesAutocomplete = ({ type, setSeleted,initial,setOrder,orderKey }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  var initialVal = initial



  const handleSelect = async (address) => {
    setValue(address, false)
    clearSuggestions();
    type(address)
    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0])
    setSeleted(current => [...current, { lat, lng }])

  }

  const handleOnChange = (e) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      [orderKey]: "",
    }));
    setValue(e.target.value)
  }

  return <Combobox onSelect={handleSelect}>
    <ComboboxInput
      value={initialVal !== "" ? initialVal :  value}
      onChange={handleOnChange }
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





