import React, { useState } from "react";
import {
  SearchStreet,
  SearchMain,
  Button,
  Form,
  TitleSearch,
  TitleContainer,
  ContainerSearch,
  Select,
} from "../styledComponents/BodySearchStyled";

export default function BodySearch() {
  const [value, setValue] = useState("");

  const handleChangeValue = (event) => {
    setValue(event.target.value);
  };

  return (
    <ContainerSearch>
      <TitleContainer>
        Recherche à
        <Select>
          <option value="0">Lille</option>
        </Select>
      </TitleContainer>

      <SearchMain>
        <TitleSearch>nom de la rue :</TitleSearch>
        <Form>
          <SearchStreet value={value} onChange={handleChangeValue} />
        </Form>
        <Button></Button>
      </SearchMain>
    </ContainerSearch>
  );
}
