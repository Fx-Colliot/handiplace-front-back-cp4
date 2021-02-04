import Header from "../components/Header";
import BodySearch from "../components/BodySearch";
import Map from "../components/Map";
import { BodyContainer } from "./FirstPageStyled";

const FirstPage = () => {
  return (
    <div>
      <Header />
      <BodyContainer>
        <BodySearch />
        <Map />
      </BodyContainer>
    </div>
  );
};

export default FirstPage;
