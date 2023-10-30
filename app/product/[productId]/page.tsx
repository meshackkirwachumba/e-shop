"use client";

import { product } from "@/utils/product";
import ProductDetails from "./ProductDetails";
import Container from "@/app/components/Container";
import ListRating from "./ListRating";

interface IPrams {
  productId?: string;
}
const Product = ({ params }: { params: IPrams }) => {
  console.log(params.productId);

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
        {/* ratings */}
        <div
          className="
           flex
           flex-col
           gap-4
           mt-20
         "
        >
          {/* rate a product */}
          <div>Add Rating</div>
          {/* list all product ratings */}
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
};

export default Product;
