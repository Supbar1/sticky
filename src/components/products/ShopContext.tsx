import React, { useState, createContext, ReactNode } from "react";
import ShoppingCart from "./ShoppingCart";
import { toast } from "react-toastify";

interface ShoppingCartProviderProps {
  children: ReactNode;
}

interface CartItemType {
  id: number;
  quantity: number;
}

interface ShoppingCardContext {
  openCart: () => void;
  closeCart: () => void;
  buyItems: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItemType[];
  userName: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShoppingContext = createContext({} as ShoppingCardContext);

export const useShoppingContext = () => {
  return React.useContext(ShoppingContext);
};

const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userName, setUsername] = useState<string>("");

function litres(time:number) {
  const result = Math.round((time*0.5))
    return result;
}
console.log(litres(3));



  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const buyItems = () => {
    setCartItems([]);
    setIsCartOpen(false);
    toast.info("Congratulations! You are stick owner :)");
  };

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id: number) => {
    setCartItems((cartItems) => {
      if (cartItems.find((item: CartItemType) => item.id === id) == null) {
        return [...cartItems, { id, quantity: 1 }];
      } else {
        return cartItems.map((item: CartItemType) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuantity = (id: number) => {
    setCartItems((cartItems) => {
      if (
        cartItems.find((item: CartItemType) => item.id === id)?.quantity === 1
      ) {
        return cartItems.filter((item) => item.id !== id);
      } else {
        return cartItems.map((item: CartItemType) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id: number) => {
    if (cartItems.length - 1 === 0) {
      closeCart();
    }
    setCartItems((cartItems) => {
      return cartItems.filter((item) => item.id !== id);
    });
  };

  return (
    
      <ShoppingContext.Provider
        value={{
          openCart,
          closeCart,
          cartItems,
          cartQuantity,
          getItemQuantity,
          decreaseCartQuantity,
          increaseCartQuantity,
          removeFromCart,
          buyItems,
          userName,
          setUsername,
          isMenuOpen,
          setIsMenuOpen,
        }}
      >
        {children}
        <React.StrictMode>
          <ShoppingCart
            isCartOpen={isCartOpen}
            cartItems={cartItems}
            buyItems={buyItems}
          />
        </React.StrictMode>
      </ShoppingContext.Provider>
  
  );
};

export default ShoppingCartProvider;