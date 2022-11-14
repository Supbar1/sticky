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
