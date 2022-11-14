import { Link } from "react-router-dom";
import styled from "styled-components";
import ScrollToTop from "./ScrollToTop";

const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    text-decoration: none;
    height: 60px;
  }
  #contact {
    border-bottom: 1px solid var(--clr-accent-500);
  }
`;
const SingleLink = styled.li`
  list-style: none;
  text-decoration: none;
  color: var(--clr-accent-400);
  margin: 1.4rem 0;
  :hover {
    color: var(--clr-neutral-100);
    cursor: pointer;
  }
`;

interface FooterLinksType {
  isMessageOpen: () => void;
}
const FooterLinks = ({ isMessageOpen }: FooterLinksType) => (
  <LinksList>
 
    <Link to="/">
      <SingleLink>Main</SingleLink>
    </Link>
    <Link to="/community">
      <SingleLink>Community</SingleLink>
    </Link>
    <Link to="/products">
      <SingleLink>Products</SingleLink>
    </Link>
    <Link to="/login">
      <SingleLink>Start Now</SingleLink>
    </Link>
    <SingleLink id="contact" onClick={isMessageOpen}>
      Contact Us
    </SingleLink>
  </LinksList>
);

export default FooterLinks;
