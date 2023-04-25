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

  const [order, setOrder] = useState({
    phone_number: "",
    recepient_name: "",
    recepient_phone_no: "",
    description: "",
    weight: "",
    delivery_drop_off: "",
    pick_up: "",
    distance: "",
    routes: "",
    routeamount: ""
  });

  const [selected, setSeleted] = useState([])


  useEffect(() => {
    console.log(selected.length)
  }, [selected])

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

    axios.post("http://localhost:3000/orders", {
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(order)
    })
      .then((res) => {
        if (res.ok) {
          console.log("Order created successfully:", res);
          setOrder({
            phone_number: "",
            recipient_name: "",
            recipient_phone_no: "",
            description: "",
            weight: "",
            delivery_drop_off: "",
            pick_up: "",
            distance: "",
            routes: "",
            routeamount: "",
            user_id: user_id,
          });
        } else {
          alert("Failed to create order")
        }
      })
      .catch((error) => {
        console.error("Error creating order:", error);
      })
  }

  const [travelData, setTravelData] = useState(null);
  const [distance, setDistance] = useState(0);

  const setData = (travelData) => {
    setTravelData(travelData);
    console.log(travelData)
    if (travelData != null) {
      if (travelData.distance != null) {
        setDistance(travelData.distance.text)
      }

    }
  };

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
                    name="username"
                    value={order.username}
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
                  Drop-off:
                  {/* <input
              type="text"
              name="delivery_drop_off"
              value={order.delivery_drop_off}
              onChange={handleChange}
            /> */}
                  <PlacesAutocomplete setSeleted={setSeleted} />
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
                  Pick-up:
                  {/* <input
              type="text"
              name="pick_up"
              value={order.pick_up}
              onChange={handleChange}
            /> */}
                  <PlacesAutocomplete setSeleted={setSeleted} />
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
                    type="text"
                    name="weight"
                    value={order.weight}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Distance:
                  <input
                    type="text"
                    name="distance"
                    value={distance}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Routes:
                  <input
                    type="text"
                    name="routes"
                    value={order.routes}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Route Amount:
                  <input
                    type="text"
                    name="routeamount"
                    value={order.routeamount}
                    onChange={handleChange}
                  />
                </label>
                {/* <label>
            Price:
            <input
              type="text"
              name="price"
              value={order.price}
              onChange={handleChange}
            />
          </label> */}
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


const PlacesAutocomplete = ({ setSeleted }) => {
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




