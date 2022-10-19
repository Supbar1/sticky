import styled from "styled-components";
import { Link } from "react-router-dom";

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  @media (max-width: 35em) {
    margin: 1rem;
  }
`;
const FooterSearchBarStyled = styled.div`
  input {
    height: 2em;
  }
`;
const Button = styled.button`
  cursor: pointer;
  border: 0;
  line-height: 1;
  border-radius: 100vmax;
  padding: 1.25em 2.5em;
  font-weight: var(--fw-bold);
  font-size: var(--fs-button);
  color: var(--clr-neutral-100);
  background-color: var(--clr-accent-400);
  box-shadow: 0 1.125em 1em -1em var(--clr-accent-500);
`;

const FooterSearchBar = () => (
  <Center>
    <FooterSearchBarStyled>
      <input type="email" />
      <Link to="/not-found">
        <Button>Go</Button>
      </Link>
    </FooterSearchBarStyled>
    <p>Copyright 2022. All Rights Reserved</p>
  </Center>
);

export default FooterSearchBar;
