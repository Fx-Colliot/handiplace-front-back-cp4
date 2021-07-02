import styled from "styled-components";
import { Device } from "../assets/Device";

export const MapDiv = styled.div`
  display: flex;
  width: 40vw;
  margin-top: 6vh;
  border: 2px solid grey;
  .leaflet-container {
    width: 45vw;
    height: 60vh;
  }
  @media ${Device.mobile} {
    width: 80vw;
    .leaflet-container {
      width: 80vw;
      height: 45vh;
    }
  }
`;
