"use client";

import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Heading from "../components/Heading";
import Button from "../components/Button";
import ItemContent from "./ItemContent";

const CartClient = () => {
  const { cartProducts } = useCart();

  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex items-center flex-col">
        <div className="text-2xl">Your cart is empty!</div>
        <div>
          <Link
            href="/"
            className="
            text-slate-500
              mt-2
              flex
              items-center
              gap-1
            "
          >
            <MdArrowBack size={22} />
            <span>Start shopping</span>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Heading title="Shopping Cart" center />
      <div
        className="
         grid
         grid-cols-5
         text-xs
         gap-4
         pb-2
         items-center
         mt-8
       "
      >
        <div
          className="
           col-span-2
           justify-self-start
         "
        >
          PRODUCT
        </div>
        <div
          className="
           justify-self-center
         "
        >
          PRICE
        </div>
        <div
          className=" 
          justify-self-center
         "
        >
          QUANTITY
        </div>
        <div
          className="
           justify-self-end
         "
        >
          TOTAL
        </div>
      </div>

      {/* map all products in a cart */}
      <div>
        {cartProducts &&
          cartProducts.map((item) => {
            return <ItemContent key={item.id} item={item} />;
          })}
      </div>

      {/* clear cart and subtotal */}
      <div
        className="
         border-t-[1.5px]
         border-slate-200
         py-4
         flex
         justify-between
         gap-4
       "
      >
        {/* clear cart */}
        <div className="w-[90px]">
          <Button label="Clear Cart" small outline onClick={() => {}} />
        </div>
        {/* subtotal */}
        <div className="flex flex-col text-sm gap-1 items-start">
          <div className="flex items-center justify-between w-full text-base font-semibold">
            <span>Subtotal</span>
            <span>1000</span>
          </div>
          <p className="text-slate-500">
            Taxes and shipping calculated at checkout
          </p>
          <Button label="Checkout" onClick={() => {}} />
          <Link
            href="/"
            className="text-slate-500 mt-2 flex items-center gap-1"
          >
            <MdArrowBack size={22} />
            <span>Continue Shopping</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartClient;
