import React from "react";
import style from "./ProductList.module.css"
import ProductCard from "../ProductCard/ProductCard";

const ProductList = ({ data }) => {
  return (
    <>
      <div className={style.productList}>
        <ProductCard data={data} />
      </div>
    </>
  );
};

export default ProductList;
