import React from "react";
import HomeBanner from "./components/HomeBanner";
import Container from "./components/Container";
import { products } from "@/utils/products";
import { truncateText } from "@/utils/truncateText";
import ProductCard from "./components/products/ProductCard";

function Home() {
  return (
    <div className="p-8">
      <div>
        <Container>
          <div>
            <HomeBanner />
          </div>
          <div
            className="
             grid
             grid-cols-2
             sm:grid-cols-3
             lg:grid-cols-4
             xl:grid-cols-5
             2xl:grid-cols-6
             gap-8
           "
          >
            {products.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Home;
