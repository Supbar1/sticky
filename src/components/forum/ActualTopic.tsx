import styled from "styled-components";
import Center from "./../../common/Center";

const Container = styled(Center)`
  width: 100%;
  margin-bottom: 2rem;
  @media (max-width: 60em) {
    margin: 2rem;
    width: 100%;
    background-color: var(--clr-accent-200);
    color: var(--clr-neutral-900);
  }
`;
const Heading = styled.h2`
  padding: var(--size-500);
  font-size: var(--fs-primary-heading);
  font-weight: var(--fw-bold);
  border-bottom: 4px solid var(--clr-accent-400);
  @media (max-width: 60em) {
    border-bottom: none;
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
