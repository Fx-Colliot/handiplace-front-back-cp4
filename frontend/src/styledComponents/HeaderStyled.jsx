import styled from "styled-components";
import { Device } from "../assets/Device";

export const Container = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-around;
  height: 20vh;
  padding-top: 5vh;
  border-bottom: 0.5rem solid#1359a7;
  @media ${Device.mobile} {
    height: 20vh;
    padding-top: 2vh;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.2rem solid #1359a7;
  }
`;

export const Title = styled.h1`
  font-size: 8rem;
  color: #56b4e9;
  text-shadow: 2px 0 0 black, 0 2px 0 black, 0 -2px 0 black, -2px 0 0 black,
    2px 2px 0 black, 2px -2px 0 black, -2px 2px 0 black, -2px -2px 0 black;
  @media ${Device.mobile} {
    font-size: 3rem;
  }
`;

export const Logo = styled.img`
  height: 13vh;
  width: 8vw;
  @media ${Device.mobile} {
    height: 8vh;
    width: 14vw;
  }
`;

export const Inscription = styled.p`
  font-size: 2rem;
  cursor: pointer;
  @media ${Device.mobile} {
    font-size: 1.2rem;
  }
`;
