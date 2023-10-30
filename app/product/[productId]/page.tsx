"use client";

import { product } from "@/utils/product";
import { useParams } from "next/navigation";
import ProductDetails from "./ProductDetails";
import Container from "@/app/components/Container";

const Product = () => {
  const params = useParams();

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
      </Container>
    </div>
  );
};

export default Product;
