import React, { useEffect, useState } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { MapDiv } from "../styledComponents/MapStyled";
import axios from "axios";

function Map() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5050/places").then(({ data }) => {
      setLocations(data);
    });
  }, []);
  console.log(locations);
  return (
    <MapDiv>
      <MapContainer
        center={[50.62925, 3.057256]}
        zoom={13}
        minZoom={13}
        maxZoom={17}
      >
        {locations.map((location) => (
          <Marker position={[location.latitude, location.longitude]} />
        ))}

        <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </MapDiv>
  );
}

export default Map;
