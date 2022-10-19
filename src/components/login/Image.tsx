import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 50%;
  img {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 60em) {
    width: 100%;
    position: absolute;
    z-index: -1;
    opacity: 0.15;
  }
`;

const Image = () => (
  <Container>
    <img
      src="https://www.woodtoolsanddeco.com/10220-large_default/set-of-200-wooden-sticks-square-40x40-mm-38-cm-length-birch-wood.jpg"
      alt="sorry for stick"
    ></img>
  </Container>
);
export default Image;
