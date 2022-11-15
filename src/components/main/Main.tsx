import styled from "styled-components";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Carousel from "./ShopCarousel";
import Section3 from "./Section3";
import SpinningStick from "../../common/SpinningStick";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-inline: auto;
  text-align: center;
  width: 100%;
  font-family: var(--ff-body);
  height: 100%;
  div {
    width: min(1310px, 100%);
  }
`;
const SmallScreen = styled.div`
  display: none;
  @media (max-width: 60em) {
    display: inherit;
    background-color: hsl(12, 88%, 59%, 0.5);
  }
`;

const BigScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(12, 88%, 59%, 0.5);

  z-index: -1;
  @media (max-width: 60em) {
    display: none;
  }
`;

const Main = () => (
  <>
    <Container>
      <Section1 />
    </Container>

    <BigScreen>
      <Section2 />
    </BigScreen>

    <Container>
      <Section3 />

      <SmallScreen>
        <Section2 />
      </SmallScreen>

      <Carousel />
    </Container>
  </>
);

export default Main;
