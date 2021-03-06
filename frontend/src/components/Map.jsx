import React, { useEffect, useState } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { MapDiv } from "../styledComponents/MapStyled";
import axios from "axios";

function Map() {
  const [locations, setLocations] = useState([]);
  //const [activeSpace, setActiveSpace] = useState(null);

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
        <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        {locations.map((location) => (
          <Marker
            key={location.idplaces}
            position={[location.latitude, location.longitude]}
            onClick={() => {}}
          >
            <Popup position={[location.latitude, location.longitude]}>
              <div>
                <h3>{location.adresse}</h3>
              </div>
            </Popup>
            /
          </Marker>
        ))}
      </MapContainer>
    </MapDiv>
  );
}

export default Map;
