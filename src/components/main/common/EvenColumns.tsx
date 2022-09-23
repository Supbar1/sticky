import styled from "styled-components";
import { ReactNode } from "react";

const EvenColumnsStyled = styled.div`
  padding-block: var(--size-900);
  font-size: var(--fs-body);
  display: grid;
  gap: 5vw;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  @media (max-width: 60em) {
    grid-auto-flow: row;
    grid-auto-columns: 1fr;
  }
`;
interface EvenColumnsProps {
  children: ReactNode;
}
const EvenColumns = ({ children }: EvenColumnsProps) => (
  <EvenColumnsStyled>{children}</EvenColumnsStyled>
);

export default EvenColumns;
