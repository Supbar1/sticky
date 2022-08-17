import { useState } from "react";
import styled from "styled-components";
import "./navbar.css";
import "../../style.css";
import PageTitle from "./PageTitle";
import NavbarLinuks from "./Links";

const Navigation = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--clr-neutral-100);
  @media (max-width: 57em) {
    flex-direction: column;
    img {
      display: none;
    }
  }
`;

export default function Navbar() {
  const [navbarLinks, setNavbarLinks] = useState("navbar-links");

  function navbarToggle() {
    navbarLinks === "navbar-links"
      ? setNavbarLinks("navbar-links active")
      : setNavbarLinks("navbar-links");
  }
  return (
    <Navigation>
      <PageTitle click={navbarToggle} />
      <div className={navbarLinks}>
        <NavbarLinuks />
      </div>
    </Navigation>
  );
}
