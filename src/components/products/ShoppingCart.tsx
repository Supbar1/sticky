import styled from "styled-components";
import { useShoppingContext } from "./ShopContext";
import ShopItem from "./ShopItem";
import storeItems from "../../services/items.json";
import OrangeButton from "./../../common/OrangeButtons";
import Center from "./../../common/Center";

const Container = styled(Center)`
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  margin-top: auto;
  margin-left: auto;
  position: fixed;
`;
const ShopWindow = styled.div`
  text-align: center;
  width: max(600px, 50%);
  height: min(700px, 100%);
  background-color: white;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0.5em;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 100vw;
    width: 15px;
    height: 15px;
    background: var(--clr-accent-300);
  }
`;
const Header = styled.h2`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 2rem;
  font-size: var(--fs-900);
`;
const ListItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const BuyButton = styled(OrangeButton)`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
interface ShoppingCartProps {
  isCartOpen: boolean;
  cartItems: { id: number; quantity: number }[];
  buyItems: () => void;
}
interface CartItemType {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}
const ShoppingCart = ({
  isCartOpen,
  cartItems,
  buyItems,
}: ShoppingCartProps) => {
  const { closeCart, getItemQuantity } = useShoppingContext();

  if (isCartOpen === false) return null;

  return (
    <Container>
      <ShopWindow>
        <Header>
          Products <i className="fa-solid fa-xmark" onClick={closeCart}></i>
        </Header>
        <p>Reminder: You may need more stick's</p>
        {storeItems.map((item: CartItemType) => (
          <ListItem key={item.id}>
            {getItemQuantity(item.id) > 0 && (
              <ShopItem {...item} id={item.id} />
            )}
          </ListItem>
        ))}
        <BuyButton onClick={buyItems}>Buy Items!</BuyButton>
      </ShopWindow>
    </Container>
  );
};
export default ShoppingCart;
