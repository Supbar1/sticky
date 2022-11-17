import styled from "styled-components";
import { ReactNode } from "react";

const Container = styled.div`
  width: min(1310px, 100%);
  padding-block: var(--size-700);
  font-size: var(--fs-body);
  display: grid;
  gap: 2vw;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  @media (max-width: 60em) {
    padding: 0;
    grid-auto-flow: row;
    grid-auto-columns: 1fr;
  }
`;
interface EvenColumnsProps {
  children: ReactNode;
  className?: string;
}
const EvenColumns = ({ className, children }: EvenColumnsProps) => (
  <Container className={className}>{children}</Container>
);

export default EvenColumns;
