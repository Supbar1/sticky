import styled from "styled-components";
import "../../style.css";

const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (max-width: 60em) {
    width: 100%;
    background-color: var(--clr-accent-200);
    color: var(--clr-neutral-900);
  }
`;
const Heading = styled.h2`
  padding: var(--size-500);
  font-size: var(--fs-primary-heading);
  font-weight: var(--fw-bold);
  @media (max-width: 60em) {
    padding: var(--size-400);
    font-size: var(--fs-800);
  }
`;
export default function ActualTopic({ actualTopic, topicPicked }) {
  return (
    <Title>
      <Heading>{topicPicked && actualTopic}</Heading>
    </Title>
  );
}
