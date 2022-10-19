import styled from "styled-components";
import "../../style.css";

const Container = styled.div`
  width: 20%;
  @media (max-width: 60em) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: var(--fs-300);
  }
`;
const Heading = styled.h3`
  font-size: var(--fs-secondary-heading);
  line-height: 1.6;
  font-weight: bold;
  margin: 2rem;
  @media (max-width: 60em) {
    margin: 1rem;
    font-size: var(--fs-800);
  }
`;
const Titles = styled.div`
  font-size: var(--fs-500);
  margin: 2rem;
  @media (max-width: 60em) {
    margin: 1rem;
  }
`;
type SingleTopicType = {
  readonly userId: number;
  readonly id: number;
  title: string;
  completed: boolean;
};
type TopicsProps = {
  topics: SingleTopicType[];
  onPageChange: (topic: SingleTopicType) => void;
};
const Topics = ({ topics, onPageChange }: TopicsProps) => (
  <Container>
    <Heading>choose topic</Heading>
    {topics &&
      topics.map((topic:SingleTopicType) => (
        <Titles key={topic.id} onClick={() => onPageChange(topic)}>
          {topic.title}
        </Titles>
      ))}
  </Container>
);

export default Topics;
