import { useState } from "react";
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

const Links = styled.div`
  display: flex;
  div a {
    display: block;
    text-decoration: none;
    color: var(--clr-accent-400);
    padding: 1rem;
  }
  div:hover {
    background-color: var(--clr-accent-100);
  }
  @media (max-width: 60em) {
    display: none;
    width: 100%;
  }
`;

const LinksActive = styled.div`
  display: flex;
  div {
    list-style: none;
    display: flex;
    justify-content: center;
  }
  div a {
    display: block;
    text-decoration: none;
    color: var(--clr-accent-400);
    padding: 1rem;
  }
  div:hover {
    background-color: var(--clr-accent-100);
  }
  @media (max-width: 60em) {
    flex-direction: column;
  }
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <Container>
      <PageTitle isMenuOpen={() => setIsMenuOpen(!isMenuOpen)} />
          <NavbarLinks isMenuOpen={isMenuOpen}/>
      
          </Container>
  );
};
export default Navbar;
