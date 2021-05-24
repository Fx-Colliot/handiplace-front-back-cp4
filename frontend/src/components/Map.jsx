import React, { useEffect, useRef, useState } from "react";
import {
  Circle,
  CircleMarker,
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import { MapDiv } from "../styledComponents/MapStyled";
import axios from "axios";
import geoLocation from "../GeoLocation/geoLocation";

function Map() {
  const mapRef = useRef();
  const [spaces, setSpaces] = useState([]);
  const location = geoLocation();
  const position = [50.62925, 3.057256];

  //const showMyLocation = () => {
  //  if (location.loaded && !location.error) {
  //    flyTo([location.coordinates.lat, location.coordinates.lng]);
  //  } else {
  //    alert("error");
  //  }
  //};

  //TEST AVEC CARTE GAET, PB CIRCLE AUSSI, SA CARTE UTILIE POSITION.
  //LA MIENNE AVEC LOCATION

  //Location navigator ok, not work with button flyTo
  //Plus de carte avec le circle
  //Peut etre changer la géolocalisation, react geolocated
  //Changer tilelayer

  useEffect(() => {
    axios.get("http://localhost:5050/places").then(({ data }) => {
      setSpaces(data);
    });
  }, []);
  console.log(spaces);
  console.log(location);

  return (
    <MapDiv>
      <MapContainer
        center={position}
        // center={[50.62925, 3.057256]}
        zoom={15}
        //minZoom={12}
        //maxZoom={17}
      >
        <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />

        {/* } {location.loaded && !location.error && ( */}
        <>
          <Marker
            // position={position}
            position={[location.coordinates.lat, location.coordinates.lng]}
          >
            {/* <Circle
              center={position}
              radius={1000}
              center={[location.coordinates.lat, location.coordinates.lng]}
              radius={300}
              color="green"
              fillColor="#0163FF"
              fillOpacity={0.4}
              opacity={1}
            /> */}

            <Popup>
              <p>toto</p>
            </Popup>
          </Marker>
        </>
        {/* )}*/}

        {spaces.map((space) => (
          <Marker
            key={space.idplaces}
            position={[space.latitude, space.longitude]}
            onClick={() => {}}
          >
            <Popup position={[space.latitude, space.longitude]}>
              <div>
                <h3>{space.voie}</h3>
              </div>
            </Popup>
            /
          </Marker>
        ))}
      </MapContainer>
      {/*} <div>
    //     <button onClick={showMyLocation}>Locate Me</button>
    //   </div>*/}
    </MapDiv>
  );
}

export default Map;

// <> MAP STANDARD GAETAN
//   <MapContainer
//     center={position}
//     zoom={13}
//     scrollWheelZoom={false}
//     style={{ height: "35vh", width: "60%" }}
//   >
//     <TileLayer
//       attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//     />
//     <Marker position={position}>
//       <CircleMarker center={position} radius={10000} />
//       <Popup>
//         A pretty CSS3 popup. <br /> Easily customizable.
//       </Popup>
//     </Marker>
//   </MapContainer>
// </>
