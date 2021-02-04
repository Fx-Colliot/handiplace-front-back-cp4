import styled from "styled-components";
import { Device } from "../assets/Device";

export const ContainerSearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 35vw;
  @media ${Device.mobile} {
    width: 100%;
  }
`;

export const TitleContainer = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  padding: 3vh 0 3vh 0;
  @media ${Device.mobile} {
    font-size: 1.4rem;
  }
`;

export const Select = styled.select`
  width: 10vw;
  height: 4vh;
  @media ${Device.mobile} {
    width: 20vw;
  }
`;

export const TitleSearch = styled.h2`
  font-size: 2rem;
  color: #56b4e9;
  @media ${Device.mobile} {
    font-size: 1.3rem;
  }
`;
export const SearchMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: #fff;
  width: 30vw;
  height: 10vh;
  @media ${Device.mobile} {
    width: 60%;
  }
`;

export const SearchStreet = styled.input`
  width: 100%;
  height: 1.5rem;
  border: #1359a7 2px solid;
  background-color: white;
  font-size: 1.5rem;
  @media (max-width: 500px) {
    border: #1359a7 2px solid;
  }
`;

export const Button = styled.button`
  display: none;
`;

export const Form = styled.form`
  width: 100%;
`;
