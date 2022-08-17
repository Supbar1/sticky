import styled from "styled-components";

const ButtonStyled = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 57em) {
    display: flex;
    margin-right: 20px;
    width: 60px;
    height: 41px;
  }
`;
const Bar = styled.span`
  height: 8px;
  width: 100%;
  background-color: var(--clr-accent-400);
  border-radius: 10px;
`;
export default function ToggleButton({ click }) {
  return (
    <ButtonStyled onClick={click}>
      <Bar></Bar>
      <Bar></Bar>
      <Bar></Bar>
    </ButtonStyled>
  );
}
