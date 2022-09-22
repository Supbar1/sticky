import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  text-align: center;
  span {
    font-size: var(--fs-500);
  }
  @media (max-width: 60em) {
    span {
      font-size: var(--fs-300);
    }
  }
`;
const Sticky = styled.h1`
  padding: 1rem;
  font-size: 100px;
  color: var(--clr-neutral-900);
  font-family: var(--ff-primary);
  font-weight: bold;
  @media (max-width: 60em) {
    font-size: 50px;
  }
`;
export default function Logo() {
  return (
    <StyledLogo>
      <Sticky>Sticky</Sticky>
      <span>TM</span>
    </StyledLogo>
  );
}
