import styled from "styled-components";

const StickAnimation = styled.div`
  /* border: 1px solid red; */
  position: absolute;
  height: 402px;
  background: url(https://media.istockphoto.com/id/527232683/photo/wooden-stick.jpg?s=612x612&w=0&k=20&c=bXYR6f5bSVv7TiEr0drNCM1gzKG719n4pSg7WNgurm4=);
  background-repeat: no-repeat;
  background-color: transparent;
  background-size: 306px 400px;
  width: 300px;
  background-position: center;
  z-index: -2;
  animation: SpinningStickAnimation 9s linear infinite;
  @media (max-width: 1000px) {
    display: none;
  }
  @keyframes SpinningStickAnimation {
    0% {
      transform: scale(0) translateY(0px) translateX(-900px) rotate(0);
      opacity: 0.6;
    }
    96% {
      transform: scale(0.96) translateY(-2800px) translateX(-345px)
        rotate(180deg);
      opacity: 0.2;
    }
    100% {
      transform: scale(1) translateY(-2900px) translateX(-345px) rotate(290deg);
      opacity: 0;
    }
  }
`;

const SpinningStick = () => <StickAnimation />;

export default SpinningStick;
