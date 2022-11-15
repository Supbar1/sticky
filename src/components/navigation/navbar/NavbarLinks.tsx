import { Link } from "react-router-dom";
import styled from "styled-components";

const LinksOnWideScreen = styled.div`
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

const LinksOnNarrowScreen = styled.div`
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

interface NavbarLinksType {
  isMenuOpen: boolean;
}

const NavbarLinks = ({ isMenuOpen }: NavbarLinksType) => (
  <>
    {isMenuOpen ? (
      <LinksOnNarrowScreen>
        <Links />
      </LinksOnNarrowScreen>
    ) : (
      <LinksOnWideScreen>
        <Links />
      </LinksOnWideScreen>
    )}
  </>
);

export default NavbarLinks;

const Links = () => {
  return (
    <>
      <div>
        <Link to="/">Main</Link>
      </div>
      <div>
        <Link to="/forum">Forum</Link>
      </div>
      <div>
        <Link to="/products">Products</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
    </>
  );
};
