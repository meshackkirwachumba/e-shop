import { CartProductType } from "@/app/product/[productId]/ProductDetails";
import { truncateText } from "@/utils/truncateText";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";

type CartContextType = {
  cartTotalQty: number;
  cartProducts: CartProductType[] | null;
  handleAddProductToCart: (product: CartProductType) => void;
  handleRemoveProductFromCart: (product: CartProductType) => void;
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

  //useEffect to check for cart items in local storage
  useEffect(() => {
    const cartItems: any = localStorage.getItem("eShopCartItems");
    const cProducts: CartProductType[] | null = JSON.parse(cartItems);
    setCartProducts(cProducts);
  }, []);

  // adding product to cart
  const handleAddProductToCart = useCallback((product: CartProductType) => {
    //allProductsInACartArray array can have products or null
    setCartProducts((allProductsInACartArray) => {
      let updatedCart;
      if (allProductsInACartArray) {
        updatedCart = [...allProductsInACartArray, product];
      } else {
        updatedCart = [product];
      }
      //alert the user product added to cart
      toast.success(`${truncateText(product.name)} added to cart`);
      //make data in a cart persistent
      localStorage.setItem("eShopCartItems", JSON.stringify(updatedCart));
      return updatedCart;
    });
  }, []);

  // removing product from cart
  const handleRemoveProductFromCart = useCallback(
    (product: CartProductType) => {
      if (cartProducts) {
        const filteredProducts = cartProducts.filter(
          (item) => item.id !== product.id
        );
        setCartProducts(filteredProducts);

        toast.success(`${truncateText(product.name)}  removed from cart`);
        localStorage.setItem(
          "eShopCartItems",
          JSON.stringify(filteredProducts)
        );
      }
    },
    [cartProducts]
  );

  const value = {
    cartTotalQty,
    cartProducts,
    handleAddProductToCart,
    handleRemoveProductFromCart,
  };
  return <CartContext.Provider value={value} {...props} />;
};

//consumer hook
export const useCart = () => {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCart must be used within a CartContextProvider");
  }

  return context;
};
