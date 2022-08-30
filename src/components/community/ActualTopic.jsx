import styled from "styled-components";
import "../../style.css";

const Title = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: left;
  text-align: left;
  margin-left: 10px;
`;

export default function ActualTopic({ actualTopic }) {
  return (
    <Title className="fs-secondary-heading fw-bold padding-block-900">
      {actualTopic}
    </Title>
  );
}
