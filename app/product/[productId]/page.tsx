import ProductDetails from "./ProductDetails";
import Container from "@/app/components/Container";
import ListRating from "./ListRating";
import { products } from "@/utils/products";
import getProductById from "@/actions/getProductById";
import NullData from "@/app/components/NullData";

interface IPrams {
  productId?: string;
}
const Product = async ({ params }: { params: IPrams }) => {
  const product = await getProductById(params);

  if (!product) {
    return <NullData title="Product with given id does not exist!" />;
  }
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
