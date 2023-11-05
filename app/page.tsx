import React from "react";
import HomeBanner from "./components/HomeBanner";
import Container from "./components/Container";
import ProductCard from "./components/products/ProductCard";
import getProducts, { IProductParams } from "@/actions/getProducts";
import NullData from "./components/NullData";

interface HomeProps {
  searchParams: IProductParams;
}

async function Home({ searchParams }: HomeProps) {
  const products = await getProducts(searchParams);

  if (products.length === 0) {
    return <NullData title="No products found!.Click 'All' to clear filters" />;
  }

  // Fisher-Yates shuffle algorithm
  function shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const shuffledProducts = shuffleArray(products);
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
            {shuffledProducts.map((product: any) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Home;
