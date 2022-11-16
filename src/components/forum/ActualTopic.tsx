import styled from "styled-components";

const Container = styled.div`
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

type ActualTopicType = {
  actualTopic: string;
};

const ActualTopic = ({ actualTopic }: ActualTopicType) => (
  <Container>{actualTopic && <Heading>{actualTopic}</Heading>}</Container>
);

export default ActualTopic;
