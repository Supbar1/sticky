import { Link } from "react-router-dom";
import Text from "../../common/Text";
import EvenColumns from "../../common/EvenColumns";
import Button from "../../common/OrangeButtons";
import { useShoppingContext } from "../products/ShopContext";
import Center from "../../common/Center";
import styled from "styled-components";

const LoginAnimation = styled(Center)`
  animation: initialAnimation 0.7s linear;
  @keyframes initialAnimation {
    0% {
      opacity: 0;
      transform: scale(1) translateY(20px) translateX(0px) rotate(0);
    }
    100% {
      opacity: 1;
    }
  }
`;

const Section1 = () => {
  const { setIsMenuOpen } = useShoppingContext();
  return (
    <EvenColumns>
      <LoginAnimation>
        <Text heading2="Our passion are sticks!" />
        <Link to="products">
          <Button onClick={() => setIsMenuOpen(false)}>Grab your stick!</Button>
        </Link>
      </LoginAnimation>
      <LoginAnimation>
        <img
          style={{ marginTop: "2rem", width: "90%" }}
          src="https://st2.depositphotos.com/1967477/5333/v/600/depositphotos_53335539-stock-illustration-tree-silhouette.jpg"
          alt="big stick"
        />
      </LoginAnimation>
    </EvenColumns>
  );
};
export default Section1;
