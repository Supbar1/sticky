import styled from "styled-components";
import Logo from "./Logo";
import ToggleButton from "./ToggleButton";
import { useShoppingCart } from "../../products/ShopContext";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: var(--fs-700);
`;
const StickImage = styled.img`
  @media (max-width: 60em) {
    display: none;
  }
`;
const ShoppingCart = styled.div`
  display: flex;
  align-items: center;
`;
const ShoppingCartIcon = styled.i`
  margin-right: 1rem;
  color: var(--clr-accent-400);
`;

interface PageTitleProps {
  isMenuOpen: () => void;
}

const PageTitle = ({ isMenuOpen }: PageTitleProps) => {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <Container>
      <StickImage
        src="https://dictionary.cambridge.org/pl/images/thumb/stick_noun_002_35886.jpg?version=5.0.247"
        alt="sorry for stick"
      />
      <Logo />
      {cartQuantity > 0 && (
        <ShoppingCart onClick={openCart}>
          {cartQuantity}
          <ShoppingCartIcon className="fa-solid fa-cart-shopping"></ShoppingCartIcon>
        </ShoppingCart>
      )}
      <ToggleButton click={isMenuOpen} />
    </Container>
  );
};
export default PageTitle;
