import styled from "styled-components";
import PageTitle from "./PageTitle";
import NavbarLinks from "./NavbarLinks";

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--clr-neutral-100);
  @media (max-width: 60em) {
    flex-direction: column;
  }
`;

const Navbar = () => (
  <Container>
    <PageTitle />
    <NavbarLinks />
  </Container>
);

export default Navbar;
