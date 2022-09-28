import styled from "styled-components";

const ButtonStyled = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 65em) {
    display: flex;
    margin-right: 20px;
    width: 60px;
    height: 41px;
  }
`;
const Bar = styled.span`
  height: 8px;
  width: 45px;
  background-color: var(--clr-accent-400);
  border-radius: 10px;
`;
interface ToggleButtonProps {
  click: () => void;
}
const ToggleButton = ({ click }:ToggleButtonProps) => (
  <ButtonStyled onClick={click}>
    <Bar></Bar>
    <Bar></Bar>
    <Bar></Bar>
  </ButtonStyled>
);

export default ToggleButton;
