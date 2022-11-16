import styled from "styled-components";
import { ReactNode } from "react";

const ButtonStyled = styled.button`
  cursor: pointer;
  text-decoration: none;
  border: 0;
  line-height: 1;
  border-radius: 100vmax;
  font-weight: var(--fw-bold);
  color: var(--clr-neutral-100);
  letter-spacing: 1px;
  word-spacing: 2px;
  background-color: var(--clr-accent-400);
  box-shadow: 0 1.125em 1em -1em var(--clr-accent-500);
  white-space: nowrap;
  padding: 1.25em 2.1em;
  font-size: var(--fs-button);
  :hover {
    background-color: var(--clr-accent-300);
    color: var(--clr-accent-500);
    box-shadow: none;
  }
  @media (max-width: 60em) {
    padding: 1em 1.9em;
  }
  /* padding: 1.25em 2.5em;
  font-size: var(--fs-button);
  margin: 2rem;
  @media (max-width: 60em) {
    margin: 1rem;
  } */
`;

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const OrangeButton = ({ className, children, onClick }: ButtonProps) => (
  <ButtonStyled className={className} onClick={onClick}>
    {children}
  </ButtonStyled>
);
export default OrangeButton;

const SmallButtonStyled = styled(OrangeButton)`
  margin-top: 0.8rem;
  margin-bottom: 2rem;
  font-size: var(--fs-400);
  padding: 0.75em 1.5em;
  letter-spacing: 0;
  word-spacing: 0;
  @media (max-width: 35rem) {
    margin-bottom: 1rem;
  }
  :hover {
    background-color: var(--clr-accent-300);
    color: var(--clr-accent-500);
  }
`;
export const SmallOrangeButton = ({
  disabled,
  className,
  children,
  onClick,
}: ButtonProps) => (
  <SmallButtonStyled
    disabled={disabled}
    className={className}
    onClick={onClick}
  >
    {children}
  </SmallButtonStyled>
);
