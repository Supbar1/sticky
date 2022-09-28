import styled from "styled-components";
import { ReactNode } from "react";

const CenterStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-align: center;
  margin: 2rem;
  a {
    text-decoration: none;
    color: var(--clr-accent-400);
  }
  a :hover {
    color: var(--clr-neutral-100);
  }
  @media (max-width: 35em) {
    margin: 1rem;
  }
`;

interface CenterProps {
  children: ReactNode;
}

const Center = ({ children }: CenterProps) => (
  <CenterStyled>{children}</CenterStyled>
);

export default Center;
