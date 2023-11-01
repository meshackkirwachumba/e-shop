"use client";

import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import { CiShoppingCart } from "react-icons/ci";

const CartCount = () => {
  const router = useRouter();
  const { cartTotalQty } = useCart();
  return (
    <div
      onClick={() => router.push("/cart")}
      className="
       relative
       cursor-pointer
      "
    >
      <div className="text-3xl">
        <CiShoppingCart />
      </div>
      <span
        className="
         absolute
         top-[-10px]
         right-[-10px]
         bg-slate-600
         text-white
         w-6
         h-6
         flex
         items-center
         justify-center
         rounded-full
         text-sm
       "
      >
        {cartTotalQty}
      </span>
    </div>
  );
};

export default CartCount;
