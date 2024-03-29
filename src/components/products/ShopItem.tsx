import "../../style.css";
import styled from "styled-components";
import formatCurrency from "../../services/formatCurrency";
import { useShoppingContext } from "./ShopContext";
import OrangeButton from "../../common/OrangeButtons";
import { useState } from "react";

const StickImages = styled.img`
  margin: auto;
`;
const AmmountButtons = styled.i`
  flex-wrap: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 40px;
  font-size: var(--fs-body);
  @media (max-width: 35em) {
    font-size: var(--fs-300);
  }
`;
const AmmountButton = styled.i`
  cursor: pointer;
  margin: 0 1rem;
  font-size: var(--fs-700);
  color: var(--clr-accent-400);
  @media (max-width: 35em) {
    font-size: var(--fs-500);
  }
`;
const AddToCardButton = styled(OrangeButton)`
  font-size: var(--fs-400);
  padding: 0.75em 1.5em;
  letter-spacing: 0;
  word-spacing: 0;
  :hover {
    background-color: var(--clr-accent-300);
    color: var(--clr-accent-500);
  }
`;

interface ShopItemProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

const ShopItem = ({ id, name, price, imgUrl }: ShopItemProps) => {
  const {
    getItemQuantity,
    decreaseCartQuantity,
    removeFromCart,
    increaseCartQuantity,
    // showCart,
  } = useShoppingContext();
  let quantity = getItemQuantity(id);
  const sizes = ["", "S", "M", "L", "XL", "XXL"];
  const [size, setSize] = useState("");
  return (
    <>
      {/* <button onClick={showCart}>Button</button> */}
      <StickImages src={imgUrl} alt="big stick" />
      <p style={{ margin: " 1.5rem 0" }}>
        {name}&nbsp;{formatCurrency(price)}
        <br />
        {/* Size:
        <select
          onChange={(e) => setSize(e.target.value)}
          value={size}
          style={{ border: "none" }}
        >
          {sizes.map((size: string) => (
            <option key={size}>{size}</option>
          ))}
        </select> */}
      </p>
      <div style={{ height: "60px" }}>
        {quantity === 0 ? (
          <AddToCardButton
            // disabled={size === ""}
            onClick={() => increaseCartQuantity(id)}
          >
            Add to Card
          </AddToCardButton>
        ) : (
          <AmmountButtons>
            <AmmountButton
              onClick={() => decreaseCartQuantity(id)}
              className="fa-solid fa-square-minus"
            />
            {quantity} in cart
            <AmmountButton
              onClick={() => increaseCartQuantity(id)}
              className="fa-solid fa-square-plus"
            />
            <AmmountButton
              onClick={() => removeFromCart(id)}
              className="fa-solid fa-trash-can"
            />
          </AmmountButtons>
        )}
      </div>
    </>
  );
};
export default ShopItem;
