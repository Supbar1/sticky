import { Link } from "react-router-dom";
import styled from "styled-components";

const LinksList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    display: block;
    text-decoration: none;
  }
  #contact {
    margin-bottom: 1.2rem;
    border-bottom: 2px solid var(--clr-accent-500);
    padding: 0.8rem 1rem 0.2rem;
    color: var(--clr-accent-100);
    :hover {
      border-bottom: 2px solid var(--clr-accent-200);
      padding-bottom: 0.8rem;

      color: black;
    }
  }
`;
const SingleLink = styled.div`
  list-style: none;
  text-decoration: none;
  color: var(--clr-accent-400);
  padding: 0.8rem 1.2rem;

  :hover {
    color: var(--clr-accent-500);
    cursor: pointer;
    background-color: var(--clr-accent-200);
    border-bottom: none;
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
    <Link to="/forum">
      <SingleLink>Forum</SingleLink>
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
