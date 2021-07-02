import React, { useEffect, useState } from "react";
// eslint-disable-next-line
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { MapDiv } from "../styledComponents/MapStyled";
import axios from "axios";

const loos = [50.616669, 3.01667];

function HandiMap() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5050/places").then(({ data }) => {
      setLocations(data);
    });
  }, []);
  console.log(locations);

  return (
    <MapDiv>
      <MapContainer center={loos} zoom={13}>
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((location) => (
          <Marker position={[location.latitude, location.longitude]}>
            <Popup>{[location.voie]}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </MapDiv>
  );
}

export default HandiMap;
