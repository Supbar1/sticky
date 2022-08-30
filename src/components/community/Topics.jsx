import styled from "styled-components";
import "../../style.css";

const TitlesSection = styled.div`
  width: 20vw;
`;

export default function Topics({ topics, onPageChange }) {
  return (
    <TitlesSection>
      <h1 className="fs-primary-heading fw-bold padding-block-700">topics:</h1>
      {topics &&
        topics.map((topic, index) => (
          <div
            key={index}
            className="fs-500 fw-bold margin"
            onClick={() => onPageChange(topic, index)}
          >
            {topic.title}
          </div>
        ))}
    </TitlesSection>
  );
}
