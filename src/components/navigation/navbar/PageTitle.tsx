import styled from "styled-components";
import Logo from "./Logo";
import ToggleButton from "./ToggleButton";
import { useShoppingContext } from "../../products/ShopContext";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: var(--fs-700);
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
  const { openCart, cartQuantity } = useShoppingContext();

  return (
    <Container>
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
