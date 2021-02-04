import React from "react";
import icon from "../assets/icon.jpg";

import {
  Container,
  Title,
  Logo,
  Inscription,
} from "../styledComponents/HeaderStyled";

export default function Header() {
  return (
    <>
      <Container>
        <Title>Handiplace</Title>
        <Logo src={icon} alt="logo fauteuil" />
        <Inscription>Connection/Inscription</Inscription>
      </Container>
    </>
  );
}
