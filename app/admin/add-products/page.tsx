import Container from "@/app/components/Container";
import FormWrap from "@/app/components/FormWrap";
import AddProductForm from "./AddProductForm";
import { getCurrentUser } from "@/actions/getCurrentUser";
import NullData from "@/app/components/NullData";

const AddProduct = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="Oops! Access Denied" />;
  }
  return (
    <div className="p-8">
      <Container>
        <FormWrap>
          <AddProductForm currentUser={currentUser} />
        </FormWrap>
      </Container>
    </div>
  );
};

export default AddProduct;
