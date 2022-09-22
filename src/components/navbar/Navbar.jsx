import "../../style.css";
import { useState } from "react";
import styled from "styled-components";
import PageTitle from "./PageTitle";
import NavbarLinks from "./NavbarLinks";

const Navigation = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--clr-neutral-100);
  img {
  }
  @media (max-width: 65em) {
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
  @media (max-width: 65em) {
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
@media (max-width: 65em) {
  flex-direction: column;
}
`;

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  function navbarToggle() {
    openMenu ? setOpenMenu(false) : setOpenMenu(true);
  }
  return (
    <Navigation>
      <PageTitle click={navbarToggle} />
      {openMenu ? (
        <LinksActive>
          <NavbarLinks />
        </LinksActive>
      ) : (
        <Links>
          <NavbarLinks />
        </Links>
      )}
    </Navigation>
  );
}
