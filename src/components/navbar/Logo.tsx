import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  text-decoration: none;
  text-align: center;
`;
const Sticky = styled.div`
  font-size: 100px;
  color: var(--clr-neutral-900);
  font-family: var(--ff-primary);
  @media (max-width: 57em) {
    font-size: 70px;
  }
`;
export default function Logo() {
  return (
    <StyledLogo>
      <Sticky className="fw-bold">Sticky</Sticky>
      <div>TM</div>
    </StyledLogo>
  );
}
