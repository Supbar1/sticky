import styled from "styled-components";
import Logo from "./Logo";
import ToggleButton from "./ToggleButton";
import { useShoppingCart } from "../products/ShopContext";

const ShoppingCart = styled.div`
  display: flex;
  align-items: center;

  i {
    color: var(--clr-accent-400);
  }
`;
const StyledTitle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: var(--fs-700);
  i {
    margin-right: 1rem;
  }
`;

interface PageTitleProps {
  click: () => void;
}

const PageTitle = ({ click }: PageTitleProps) => {
  const { openCart, cartQuantity } = useShoppingCart();
  
  return (
    <StyledTitle>
      <img
        src="https://dictionary.cambridge.org/pl/images/thumb/stick_noun_002_35886.jpg?version=5.0.247"
        alt="sorry for stick"
      />
      <Logo />
      {cartQuantity > 0 && (
        <ShoppingCart onClick={openCart}>
          {cartQuantity}
          <i className="fa-solid fa-cart-shopping"></i>
        </ShoppingCart>
      )}
      <ToggleButton click={click} />
    </StyledTitle>
  );
};
export default PageTitle;
