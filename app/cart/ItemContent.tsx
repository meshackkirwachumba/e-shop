"use client";

import { formatPrice } from "@/utils/formatPrice";
import { CartProductType } from "../product/[productId]/ProductDetails";
import Link from "next/link";
import { truncateText } from "@/utils/truncateText";
import Image from "next/image";
import SetQuantity from "../components/products/SetQuantity";
import { useCart } from "@/hooks/useCart";

interface ItemContentProps {
  item: CartProductType;
}

const ItemContent = ({ item }: ItemContentProps) => {
  // hook
  const {
    handleRemoveProductFromCart,
    handleCartQtyIncrease,
    handleCartQtyDecrease,
  } = useCart();
  return (
    <div
      className="
       grid
       grid-cols-5
       text-xs
       md:text-sm
       gap-4
       border-t-[1.5px]
       border-slate-200
       py-4
       items-center
     "
    >
      {/* product */}
      <div
        className="
         col-span-2
         justify-self-start
         flex
         gap-2
         md:gap-4
       "
      >
        <Link href={`/product/${item.id}`}>
          <div className="relative aspect-square w-[80px]">
            <Image
              src={item.selectedImg.image}
              alt={item.name}
              fill
              className="object-contain"
            />
          </div>
        </Link>
        <div className="flex flex-col justify-between">
          <Link href={`/product/${item.id}`}>{truncateText(item.name)}</Link>
          <div>{item.selectedImg.color}</div>
          <div className="w-[70px]">
            <button
              onClick={() => handleRemoveProductFromCart(item)}
              className="text-slate-500 underline"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      {/* price */}
      <div
        className="
         justify-self-center
       "
      >
        {formatPrice(item.price)}
      </div>
      {/* quantity */}
      <div
        className="
        justify-self-center
        font-semibold
       "
      >
        <SetQuantity
          cartCounter
          cartProduct={item}
          handleQtyIncrease={() => handleCartQtyIncrease(item)}
          handleQtyDecrease={() => handleCartQtyDecrease(item)}
        />
      </div>
      {/* total */}
      <div
        className="
         justify-self-end

       "
      >
        {formatPrice(item.price * item.quantity)}
      </div>
    </div>
  );
};

export default ItemContent;
