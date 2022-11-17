import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  a {
    text-decoration: none;
  }
`;
const Tm = styled.span`
  font-size: var(--fs-500);
  margin-top: 0.6rem;
  @media (max-width: 60em) {
    font-size: var(--fs-300);
  }
`;
const Sticky = styled.h1`
  :hover {
    color: var(--clr-accent-400);
  }
  padding: 1rem;
  font-size: 65px;
  color: var(--clr-neutral-900);
  font-family: var(--ff-primary);
  font-weight: bold;
  @media (max-width: 60em) {
    font-size: 50px;
  }
`;
const Logo = () => (
  <Container>
    <Link to="/">
      <Sticky>Sticky</Sticky>
    </Link>
    <Tm>TM</Tm>
  </Container>
);

export default Logo;
