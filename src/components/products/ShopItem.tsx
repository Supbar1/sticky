import "../../style.css";
import styled from "styled-components";
import { formatCurrency } from "../../services/formatCurrency";
import { useShoppingCart } from "./ShopContext";

const StickImages = styled.img`
  margin: auto;
`;
const AmmountButtons = styled.div`
  flex-wrap: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 40px;
  font-size: var(--fs-body);
  i {
    cursor: pointer;
    margin: 1rem;
    font-size: var(--fs-700);
    color: var(--clr-accent-400);
  }
  @media (max-width: 35em) {
    font-size: var(--fs-300);
    i {
      font-size: var(--fs-500);
    }
  }
`;
const AddToCardButton = styled.button`
  cursor: pointer;
  border: 0;
  line-height: 1;
  border-radius: 100vmax;
  font-weight: var(--fw-bold);
  color: var(--clr-neutral-100);
  background-color: var(--clr-accent-400);
  box-shadow: 0 1.125em 1em -1em var(--clr-accent-500);
  padding: 0.75em 1.5em;
  height: 40px;
`;
interface ShopItemProps  {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

 const ShopItem=({ id, name, price, imgUrl }: ShopItemProps) =>{
  const {
    getItemQuantity,
    decreaseCartQuantity,
    removeFromCart,
    increaseCartQuantity,
  } = useShoppingCart();
  let quantity = getItemQuantity(id);
  return (
    <>
      <StickImages src={imgUrl} alt="sorry for stick" />
      <p>
        {name}&nbsp;{formatCurrency(price)}
      </p>
      {quantity === 0 ? (
        <AddToCardButton onClick={() => increaseCartQuantity(id)}>
          Add to Card
        </AddToCardButton>
      ) : (
        <AmmountButtons>
          <i
            onClick={() => decreaseCartQuantity(id)}
            className="fa-solid fa-square-minus"
          ></i>
          {quantity} in cart
          <i
            onClick={() => increaseCartQuantity(id)}
            className="fa-solid fa-square-plus"
          ></i>
          <i
            onClick={() => removeFromCart(id)}
            className="fa-solid fa-trash-can"
          ></i>
        </AmmountButtons>
      )}
    </>
  );
}
export default ShopItem;