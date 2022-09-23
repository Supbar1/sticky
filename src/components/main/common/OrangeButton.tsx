import styled from "styled-components";
import { ReactNode } from "react";

const ButtonStyled = styled.button`
  cursor: pointer;
  text-decoration: none;
  border: 0;
  line-height: 1;
  border-radius: 100vmax;
  padding: 1.25em 2.5em;
  font-weight: var(--fw-bold);
  font-size: var(--fs-button);
  color: var(--clr-neutral-100);
  background-color: var(--clr-accent-400);
  box-shadow: 0 1.125em 1em -1em var(--clr-accent-500);
  margin: 2rem;
  @media (max-width: 60em) {
    margin: 1rem;
  }
`;

interface ButtonProps {
  children: ReactNode;
}

const OrangeButton = ({ children }: ButtonProps) => (
  <ButtonStyled>{children}</ButtonStyled>
);

export default OrangeButton;
