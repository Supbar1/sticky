import { useState } from "react";

import styled from "styled-components";
import PageTitle from "./PageTitle";
import NavbarLinks from "./NavbarLinks";

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--clr-neutral-100);
  img {
  }
  @media (max-width: 60em) {
    flex-direction: column;
    img {
      display: none;
    }
  }
`;

const Links = styled.div`
  display: flex;
  div {
    list-style: none;
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
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const navbarToggle = () => {
    isOpenMenu ? setIsOpenMenu(false) : setIsOpenMenu(true);
  };
  return (
    <Container>
      <PageTitle click={navbarToggle} />
      {isOpenMenu ? (
        <LinksActive>
          <NavbarLinks />
        </LinksActive>
      ) : (
        <Links>
          <NavbarLinks />
        </Links>
      )}
    </Container>
  );
};
export default Navbar;
