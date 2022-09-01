import styled from "styled-components";
import "../../style.css";

const TopicsSection = styled.div`
  width: 20%;
  @media (max-width: 57rem) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export default function Topics({ topics, onPageChange }) {
  return (
    <TopicsSection className="fs-body">
      <div className="margin">
        <h2 className=" fs-primary-heading fw-bold">choose topic</h2>
      </div>
      {topics &&
        topics.map((topic, index) => (
          <div
            key={index}
            className="fs-500 margin"
            onClick={() => onPageChange(topic, index)}
          >
            {topic.title}
          </div>
        ))}
    </TopicsSection>
  );
}
