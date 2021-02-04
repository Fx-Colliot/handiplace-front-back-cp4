import styled from "styled-components";
import { Device } from "../assets/Device";

export const MapDiv = styled.div`
  display: flex;
  width: 40vw;
  margin-top: 6vh;
  .leaflet-container {
    width: 35vw;
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
