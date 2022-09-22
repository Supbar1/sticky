import styled from "styled-components";

const StickAnimation = styled.div`
  position: absolute;
  width: 700px;
  height: 400px;
  background-image: url(https://www.wellnessproinc.com/sites/default/files/styles/product_large/public/images/product/woodenstick-90cm.jpg?itok=8N3BQo4Q);
  background-color: transparent;
  z-index: -1;
  animation: animate 9s linear infinite;
  @media (max-width: 1000px) {
    display: none;
  }
  @keyframes animate {
    0% {
      transform: scale(0) translateY(0px) translateX(0px) rotate(0);
      opacity: 0.6;
    }
    96% {
      transform: scale(0.96) translateY(-2800px) translateX(-145px)
        rotate(180deg);
      opacity: 0.2;
    }
    100% {
      transform: scale(1) translateY(-2900px) translateX(0px) rotate(290deg);
      opacity: 0;
    }
  }
`;

const SpinningStick = () => {
  return <StickAnimation />;
};

export default SpinningStick;
