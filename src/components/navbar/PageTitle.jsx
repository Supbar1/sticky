import styled from "styled-components";
import Logo from "./Logo";
import ToggleButton from "./ToggleButton";

const StyledTitle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-align: center;
`;
export default function PageTitle({ click }) {
  return (
    <StyledTitle>
      <img
        src="https://dictionary.cambridge.org/pl/images/thumb/stick_noun_002_35886.jpg?version=5.0.247"
        alt="sorry for stick"
      />
      <Logo />
      <ToggleButton click={click} />
    </StyledTitle>
  );
}
