import styled from "styled-components";
import "../../style.css";

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 57rem) {
    width: 100%;
    background-color: var(--clr-accent-200);
    color: var(--clr-neutral-900);
  }
`;

export default function ActualTopic({ actualTopic, topicPicked }) {
  return (
    <Title className="margin">
      <div className="fs-secondary-heading fw-bold">
        {topicPicked && actualTopic}
      </div>
    </Title>
  );
}
