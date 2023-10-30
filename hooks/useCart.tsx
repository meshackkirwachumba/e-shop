import { createContext, useContext, useState } from "react";

type CartContextType = {
  cartTotalQty: number;
};

// create context for cart total quantity
export const CartContext = createContext<CartContextType | null>(null);

//accept any property which has key of string and any value
interface Props {
  [propName: string]: any;
}

//provider for context above
export const CartContextProvider = (props: Props) => {
  const [cartTotalQty, setCartTotalQty] = useState(0);
  const value = {
    cartTotalQty,
  };
  return <CartContext.Provider value={value} {...props} />;
};

//hook
export const useCart = () => {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCart must be used within a CartContextProvider");
  }

  return context;
};
