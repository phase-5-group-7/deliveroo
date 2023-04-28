/*global google*/
import React from "react";
import '../Order/order.css';

import { GoogleMap, DirectionsRenderer } from "@react-google-maps/api";

const defaultLocation = { lat: 40.756795, lng: -73.954298 };
let destination = { lat: 41.756795, lng: -78.954298 };
let origin = { lat: 40.756795, lng: -73.954298 };
let directionsService;
class Map extends React.Component {
  state = {
    directions: null,
    bounds: null
  };
  

  onMapLoad = map => {
    directionsService = new google.maps.DirectionsService();
    //load default origin and destination
    this.changeDirection(origin, destination);
    // Draw a line showing the straight distance between the markers
    var line = new google.maps.Polyline({path: [this.props.origin, this.props.destination], map: map});
    var originMark = new google.maps.Marker({position:this.props.origin,map: map})
    var destinationMark = new google.maps.Marker({position:this.props.destination,map: map})
    var distance = this.calculate_distance(originMark,destinationMark,this.props.origin,this.props.destination,this,this.props)

    
    this.props.setData("eee")
  };

  //function that is calling the directions service
  changeDirection = (origin, destination) => {
    console.log(this.props)
    directionsService.route(
      {
        origin: this.props.origin,
        destination: this.props.destination,
        travelMode: google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          //changing the state of directions to the result of direction service
          this.setState({
            directions: result
          });

        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  };

  calculate_distance = (mk1, mk2,origin,destination,props) => {
    var R = 3958.8; // Radius of the Earth in miles
    var rlat1 = mk1.position.lat() * (Math.PI/180); // Convert degrees to radians
    var rlat2 = mk2.position.lat() * (Math.PI/180); // Convert degrees to radians
    var difflat = rlat2-rlat1; // Radian difference (latitudes)
    var difflon = (mk2.position.lng()-mk1.position.lng()) * (Math.PI/180); // Radian difference (longitudes)

    var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
    

    let directionsService = new google.maps.DirectionsService();

  // Create route from existing points used for markers
  const route = {
      origin: origin,
      destination: destination,
      travelMode: 'DRIVING'
  }

  directionsService.route(route,
    function(response, status) { // anonymous function to capture directions
      if (status !== 'OK') {
        window.alert('Directions request failed due to ' + status);
        return;
      } else {
       
        var directionsData = response.routes[0].legs[0]; // Get data about the mapped route
        if (!directionsData) {
          window.alert('Directions request failed');
          return;
        }
        else {
          console.log (" Driving distance is " + directionsData.distance.text + " (" + directionsData.duration.text + ").")
          props.props.setData(directionsData) 
          return directionsData
        }
      }
    });
    
  }

  render() {
    
    return (
      <div className="map_container">
        <GoogleMap
          center={defaultLocation}
          zoom={5}
          onLoad={map => this.onMapLoad(map)}
          mapContainerStyle={{ height: "400px", width: "500px", borderRadius:"10px" }}
        >
          {this.state.directions !== null && (
            <DirectionsRenderer directions={this.state.directions} />
          )}
        </GoogleMap>
      </div>
    );
  }
}

export default Map;


