import styled from "styled-components";
import { ReactNode } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-align: center;
`;

interface CenterProps {
  children: ReactNode;
  className?: string;
}

const Center = ({ className, children }: CenterProps) => (
  <Container className={className}>{children}</Container>
);

export default Center;
