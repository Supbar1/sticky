import styled from "styled-components";
import { Link } from "react-router-dom";
import OrangeButton from "./../../../common/OrangeButtons";

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`;
const FooterSearchBarStyled = styled.div`
  input {
    height: 2em;
    margin: 0 0.5rem 0 0.7rem;
    max-width: 150px;
  }
`;
const Button = styled(OrangeButton)`
  padding: 1.1em 2.2em;
  margin-right: 0.7rem;
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
