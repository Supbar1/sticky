import styled from "styled-components";
import "../../style.css";
import { Link } from "react-router-dom";
import storeItems from "../../services/items.json";
import Center from "./common/Center";
import EvenColumns from "./common/EvenColumns";
import Buttonx from "./common/OrangeButton";
import SpinningStick from "./common/SpinningStick";

const Heading = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-align: center;
  margin: 2rem;
  //DIFFERENCE
  font-size: var(--fs-secondary-heading);
  //DIFFERENCE
  line-height: 1.6;
  font-weight: var(--fw-bold);
  @media (max-width: 60em) {
    font-size: var(--fs-600);
    margin: 1rem;
    padding-block: var(--size-400);
  }
`;

const Section3 = () => (
  <section>
    <EvenColumns>
      <Heading>
        Did you know that most sticks are made of wood? WOW!
        <Link to="login">
          <Buttonx>Get Started</Buttonx>
        </Link>
      </Heading>
      <SpinningStick />

      <Center>
        <img alt="sorry for stick" src={storeItems[6].imgUrl} />
      </Center>
    </EvenColumns>
  </section>
);

export default Section3;