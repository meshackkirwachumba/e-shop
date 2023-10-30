"use client";

import { CartProductType } from "@/app/product/[productId]/ProductDetails";

interface SetQuantityProps {
  cartCounter?: boolean;
  cartProduct: CartProductType;
  handleQtyIncrease: () => void;
  handleQtyDecrease: () => void;
}

const btnStyles = "border-[1.2px] border-slate-300 px-2 rounded";

const SetQuantity = ({
  cartCounter,
  cartProduct,
  handleQtyIncrease,
  handleQtyDecrease,
}: SetQuantityProps) => {
  return (
    <div className="flex items-center gap-8">
      {cartCounter ? null : <div className="font-semibold">QUANTITY:</div>}
      <div className="flex items-center text-base gap-4">
        <button onClick={handleQtyDecrease} className={btnStyles}>
          -
        </button>
        <div>{cartProduct.quantity}</div>
        <button onClick={handleQtyIncrease} className={btnStyles}>
          +
        </button>
      </div>
    </div>
  );
};

export default SetQuantity;
