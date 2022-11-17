import styled from "styled-components";
import Center from "./../../../common/Center";

const Container = styled(Center)`
  height: 90vh;
  width: 100%;
  margin: auto;
  font-size: var(--fs-body);
`;
const NotFound = () => {
  return (
    <>
      <Container>NOT FOUND</Container>
    </>
  );
};

export default NotFound;
