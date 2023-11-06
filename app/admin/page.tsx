import React from "react";
import Container from "../components/Container";
import Summary from "./Summary";
import getProducts from "@/actions/getProducts";
import getOrders from "@/actions/getOrders";
import getUsers from "@/actions/getUsers";

const Admin = async () => {
  const products = await getProducts({ category: null });
  const orders = await getOrders();
  const users = await getUsers();

  return (
    <div className="pt-8">
      <Container>
        <Summary products={products} orders={orders} users={users} />
      </Container>
    </div>
  );
};

export default Admin;
