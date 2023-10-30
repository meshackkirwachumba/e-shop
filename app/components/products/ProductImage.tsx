"use client";

import {
  CartProductType,
  selectedImgType,
} from "@/app/product/[productId]/ProductDetails";
import Image from "next/image";

interface ProductImageProps {
  cartProduct: CartProductType;
  product: any;
  handleColorSelect: (value: selectedImgType) => void;
}

const ProductImage = ({
  cartProduct,
  product,
  handleColorSelect,
}: ProductImageProps) => {
  return (
    <div
      className="
       grid
       grid-cols-6
       gap-2
       h-full
       max-h-[500px]
       min-h-[300px]
       sm:min-h-[400px]
       
     "
    >
      {/* images in colors */}
      <div
        className="
         flex
         flex-col
         items-center
         justify-center
         gap-4
         cursor-pointer
         border
         h-full
         max-h-[500px]
         min-h-[300px]
         sm:min-h-[400px]
         
       "
      >
        {product.images.map((image: selectedImgType) => {
          return (
            <div
              key={image.color}
              onClick={() => handleColorSelect(image)}
              className={`
               relative
               w-[80%]
               aspect-square
               rounded
               border-teal-300
               ${
                 cartProduct.selectedImg.color === image.color
                   ? "border-[1.5px]"
                   : "border-none"
               }

               `}
            >
              <Image
                src={image.image}
                alt={image.color}
                fill
                className="object-contain"
              />
            </div>
          );
        })}
      </div>
      {/* selected image */}
      <div className="col-span-5 aspect-square relative">
        <Image
          src={cartProduct.selectedImg.image}
          alt={cartProduct.selectedImg.color}
          fill
          className="
           w-full
           h-full
           max-h-[500px]
           min-h-[300px]
           sm:min-h-[400px]
         "
        />
      </div>
    </div>
  );
};

export default ProductImage;
