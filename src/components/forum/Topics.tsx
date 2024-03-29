import styled from "styled-components";
import "../../style.css";
import Center from "./../../common/Center";

const Container = styled(Center)`
  width: 20%;
  justify-content: flex-start;
  animation: animate 0.7s ease-in;
  @keyframes animate {
    0% {
      opacity: 0;
      transform: scale(1) translateY(20px) translateX(0px) rotate(0);
    }
    100% {
      opacity: 1;
    }
  }
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
  margin: 1rem;

  @media (max-width: 60em) {
    margin: 1rem;
    font-size: var(--fs-800);
  }
`;
const Titles = styled.div`
  font-size: var(--fs-500);
  margin: 1.5rem;
  border-bottom: 2px solid var(--clr-accent-200);
  width: 80%;
  letter-spacing: 0.5px;
  cursor: pointer;
  border-top: 2px solid transparent;
  @media (max-width: 60em) {
    width: fit-content;
    margin: 1rem;
  }
  :hover {
    border-bottom: 2px solid var(--clr-accent-300);
    border-top: 2px solid var(--clr-accent-300);
    font-weight: var(--fw-bold);
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
    <Heading>Choose topic:</Heading>
    {topics &&
      topics.map((topic: SingleTopicType) => (
        <Titles key={topic.id} onClick={() => onPageChange(topic)}>
          {topic.title}
        </Titles>
      ))}
  </Container>
);

export default Topics;
