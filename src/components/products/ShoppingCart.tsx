import styled from "styled-components";
import { useShoppingCart } from "./ShopContext";
import ShopItem from "./ShopItem";
import storeItems from "../../services/items.json";

const Container = styled.div`
  position: absolute;
  top: 0%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
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
  margin: 2rem 0;
`;
const AddToCardButton = styled.button`
  margin: auto;
  margin-bottom: 2rem;
  border: 0;
  border-radius: 100vmax;
  font-weight: var(--fw-bold);
  color: var(--clr-neutral-100);
  background-color: var(--clr-accent-400);
  box-shadow: 0 1.125em 1em -1em var(--clr-accent-500);
  padding: 1.25em 3rem;
  font-size: var(--fs-500);
  :hover {
    background-color: var(--clr-accent-300);
  }
`;
interface ShoppingCartProps {
  isCartOpen: boolean;
  cartItems: { id: number; quantity: number }[];
}
interface CartItemType {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}
const ShoppingCart = ({ isCartOpen, cartItems }: ShoppingCartProps) => {
  const { closeCart, getItemQuantity, buyItems } = useShoppingCart();

  if (cartItems.length === 0) closeCart();

  if (isCartOpen === false) return null;

  return (
    <Container>
      <ShopWindow>
        <Header>
          Products <i className="fa-solid fa-xmark" onClick={closeCart}></i>
        </Header>
        <p>Reminder: You may need more stick's</p>
        {storeItems.map((item:CartItemType) => (
          <ListItem key={item.id}>
            {getItemQuantity(item.id) > 0 && (
              <ShopItem {...item} id={item.id} />
            )}
          </ListItem>
        ))}
        <AddToCardButton onClick={buyItems}>Buy Items</AddToCardButton>
      </ShopWindow>
    </Container>
  );
};
export default ShoppingCart;
