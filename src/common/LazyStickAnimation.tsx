import styled from "styled-components";

const StickAnimation = styled.div`
  position: absolute;
  height: 402px;
  background: url(https://t3.ftcdn.net/jpg/00/91/11/18/360_F_91111889_465LQHNbUspA5KjpKbdx809PIyCfWRLR.jpg);
  background-repeat: no-repeat;
  background-color: transparent;
  background-size: 1406px 100px;
  width: 900px;
  background-position: center;
  z-index: -2;
  @media (max-width: 1000px) {
    display: none;
  }
  animation: LazyStickAnimation 33s linear infinite;
  @keyframes LazyStickAnimation {
    0% {
      transform: scale(1) translateY(240px) translateX(-500px) rotate(90deg);
      opacity: 0;
    }
    10% {
      transform: scale(1.02) translateY(240px) translateX(-300px) rotate(110deg);
      opacity: 0.4;
    }
    90% {
      transform: scale(1.18) translateY(240px) translateX(1300px) rotate(270deg);
      opacity: 0.4;
    }
    100% {
      transform: scale(1.2) translateY(240px) translateX(1500px) rotate(290deg);
      opacity: 0;
    }
  }
`;

const LazyStick = () => <StickAnimation />;

export default LazyStick;
