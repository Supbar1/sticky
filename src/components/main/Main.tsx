import styled from "styled-components";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Carousel from "./ShopCarousel";
import Section3 from "./Section3";

const Sections = styled.div`
  margin-inline: auto;
  width: min(1310px, 100%);
  font-family: var(--ff-body);
`;
const BigScreen = styled.div`
  display: none;
  @media (max-width: 57rem) {
    display: inherit;
  }
`;

const SmallScreen = styled.div`
  display: inherit;
  @media (max-width: 57rem) {
    display: none;
  }
`;

export default function Main() {
  return (
    <>
      <Sections>
        <Section1 />

        <SmallScreen>
          <Section2 />
        </SmallScreen>

        <Section3 />

        <BigScreen>
          <Section2 />
        </BigScreen>

      </Sections>
      <Carousel />
    </>
  );
}
