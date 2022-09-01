import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../style.css";

const SpinningStick = styled.div`
  position: absolute;
  width: 700px;
  height: 400px;
  background-image: url(https://www.wellnessproinc.com/sites/default/files/styles/product_large/public/images/product/woodenstick-90cm.jpg?itok=8N3BQo4Q);
  background-color: transparent;
  z-index: -1;
  animation: animate 8s linear infinite;
  @media (max-width: 1000px) {
    display: none;
  }
  @keyframes animate {
    0% {
      transform: scale(0) translateY(0px) translateX(0px) rotate(0);
      opacity: 0.6;
    }
    96% {
      transform: scale(0.96) translateY(-2300px) translateX(-145px)
        rotate(180deg);
      opacity: 0.2;
    }
    100% {
      transform: scale(1) translateY(-2300px) translateX(0px) rotate(290deg);
      opacity: 0;
    }
  }
`;
export default function Section1() {
  return (
    <section className="padding-block-700 body">
      <div>
        <div className="even-columns">
          <div className="fs-700 center fw-bold">
            Did you know that most sticks are made of wood? WOW!
            <Link to="login">
              <button className="button margin">Get Started</button>
            </Link>
          </div>
          <SpinningStick />

          <div className="center">
            <img
              alt="sorry for stick"
              src="https://www.museumofplay.org/app/uploads/2021/08/stick_0.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
