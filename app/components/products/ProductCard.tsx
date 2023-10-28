"use client";

import { formatPrice } from "@/utils/formatPrice";
import { truncateText } from "@/utils/truncateText";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  data: any;
}

const ProductCard = ({ data }: ProductCardProps) => {
  const router = useRouter();
  const productRating =
    data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    data.reviews.length;
  return (
    <div
      onClick={() => router.push(`/product/${data.id}`)}
      className="
       col-span-1
       cursor-pointer
       border-[1.2px]
       border-slate-200
       bg-slate-200
       rounded-sm
       p-2
       transition
       hover:scale-105
       text-center
       text-sm
     "
    >
      {/* contents wrapper */}
      <div
        className="
         w-full
         flex
         flex-col
         items-center
         gap-1
        "
      >
        {/* image wrapper */}
        <div
          className="
           relative
           aspect-square
           overflow-hidden
           w-full
         "
        >
          <Image
            src={data.images[0].image}
            fill
            alt={data.name}
            className="w-full h-full object-contain"
          />
        </div>
        {/* title */}
        <div className="mt-4">{truncateText(data.name)}</div>
        {/* rating */}
        <div>
          <Rating value={productRating} readOnly />
        </div>
        {/* reviews */}
        <div>{data.reviews.length} reviews</div>
        {/* price */}
        <div
          className="
           font-semibold
         "
        >
          {formatPrice(data.price)}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
