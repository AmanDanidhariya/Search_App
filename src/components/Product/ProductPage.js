import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import ProductList from "../ProductList/ProductList";

const ProductPage = ({ data }) => {
  return (
    <>
      <div>ProductPage</div>
      <Sidebar />
      <div>
        <ProductList data={data} />
      </div>
    </>
  );
};

export default ProductPage;
