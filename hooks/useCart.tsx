import { CartProductType } from "@/app/product/[productId]/ProductDetails";
import { createContext, useCallback, useContext, useState } from "react";

type CartContextType = {
  cartTotalQty: number;
  cartProducts: CartProductType[] | null;
  handleAddProductToCart: (product: CartProductType) => void;
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
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(
    null
  );

  const handleAddProductToCart = useCallback((product: CartProductType) => {
    //allProductsInACartArray array can have products or null
    setCartProducts((allProductsInACartArray) => {
      let updatedCart;
      if (allProductsInACartArray) {
        updatedCart = [...allProductsInACartArray, product];
      } else {
        updatedCart = [product];
      }

      return updatedCart;
    });
  }, []);

  const value = {
    cartTotalQty,
    cartProducts,
    handleAddProductToCart,
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
