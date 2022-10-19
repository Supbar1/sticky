import styled from "styled-components";

const Container = styled.div`
  height: 90%;
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
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
