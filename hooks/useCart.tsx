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
  cartTotalAmount: number;
  cartProducts: CartProductType[] | null;
  handleAddProductToCart: (product: CartProductType) => void;
  handleRemoveProductFromCart: (product: CartProductType) => void;
  handleCartQtyIncrease: (product: CartProductType) => void;
  handleCartQtyDecrease: (product: CartProductType) => void;
  handleClearCart: () => void;
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
  const [cartTotalAmount, setCartTotalAmount] = useState(0);
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(
    null
  );

  //useEffect to check for cart items in local storage
  useEffect(() => {
    const cartItems: any = localStorage.getItem("eShopCartItems");
    const cProducts: CartProductType[] | null = JSON.parse(cartItems);
    setCartProducts(cProducts);
  }, []);

  //useEffect which runs to get total

  useEffect(() => {
    const getTotal = () => {
      if (cartProducts) {
        const { total, qty } = cartProducts.reduce(
          (acc, item) => {
            const totalPrice = item.price * item.quantity;

            acc.total = acc.total + totalPrice;
            acc.qty = acc.qty + item.quantity;

            return acc;
          },
          { total: 0, qty: 0 }
        );

        setCartTotalQty(qty);
        setCartTotalAmount(total);
      }
    };

    getTotal();
  }, [cartProducts]);

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

  // increasing quantity of a product in a cart
  const handleCartQtyIncrease = useCallback(
    (product: CartProductType) => {
      let updatedCart;

      if (product.quantity === 99) {
        return toast.error("Oops! Maximum reached!");
      }

      if (cartProducts) {
        updatedCart = [...cartProducts];

        const existingProductIndex = cartProducts.findIndex(
          (item) => item.id === product.id
        );

        if (existingProductIndex > -1) {
          updatedCart[existingProductIndex].quantity =
            updatedCart[existingProductIndex].quantity + 1;
        }

        setCartProducts(updatedCart);
        localStorage.setItem("eShopCartItems", JSON.stringify(updatedCart));
      }
    },
    [cartProducts]
  );

  //decrese product quantity in a cart
  const handleCartQtyDecrease = useCallback(
    (product: CartProductType) => {
      let updatedCart;

      if (product.quantity === 1) {
        return toast.error("Oops! Minimum reached!");
      }

      if (cartProducts) {
        updatedCart = [...cartProducts];

        const productIndex = cartProducts.findIndex(
          (item) => item.id === product.id
        );

        if (productIndex > -1) {
          updatedCart[productIndex].quantity =
            updatedCart[productIndex].quantity - 1;
        }

        setCartProducts(updatedCart);
        localStorage.setItem("eShopCartItems", JSON.stringify(updatedCart));
      }
    },
    [cartProducts]
  );

  // clear cart
  const handleClearCart = useCallback(() => {
    setCartProducts(null);
    setCartTotalQty(0);
    localStorage.setItem("eShopCartItems", JSON.stringify(null));

    toast.success("cart cleared!");
  }, [cartProducts]);

  const value = {
    cartTotalQty,
    cartTotalAmount,
    cartProducts,
    handleAddProductToCart,
    handleRemoveProductFromCart,
    handleCartQtyIncrease,
    handleCartQtyDecrease,
    handleClearCart,
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
