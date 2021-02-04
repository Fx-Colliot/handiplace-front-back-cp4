import styled from "styled-components";
import { Device } from "../assets/Device";

export const BodyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media ${Device.mobile} {
    flex-direction: column;
  }
`;
