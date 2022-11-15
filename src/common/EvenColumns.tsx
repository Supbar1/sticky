import styled from "styled-components";
import { ReactNode } from "react";

const Container = styled.div`
  width: min(1310px, 100%);
  /* width: 100vw; */
  padding-block: var(--size-700);
  font-size: var(--fs-body);
  display: grid;
  gap: 1vw;
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
  <Container>{children}</Container>
);

export default EvenColumns;
