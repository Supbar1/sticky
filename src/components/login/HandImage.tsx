import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 50%;
  animation: animate 1s ease-in;
  @keyframes animate {
    0% {
      opacity: 0;
      transform: scale(1) translateY(20px) translateX(0px) rotate(0);
    }
    60% {
      opacity: 0;
      transform: scale(1) translateY(20px) translateX(0px) rotate(0);
    }
    100% {
      opacity: 1;
    }
  }
  @media (max-width: 60em) {
    width: 100%;
    position: absolute;
    z-index: -1;
    opacity: 0.15;
  }
`;

const HandWithSticksImage = styled.img`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Image = () => (
  <Container>
    <HandWithSticksImage
      src="https://www.woodtoolsanddeco.com/10220-large_default/set-of-200-wooden-sticks-square-40x40-mm-38-cm-length-birch-wood.jpg"
      alt="hand with stick"
    />
  </Container>
);
export default Image;
