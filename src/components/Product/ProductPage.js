import React from "react";
import style from "./ProductPage.module.css"
import Sidebar from "../Sidebar/Sidebar";
import ProductList from "../ProductList/ProductList";

const ProductPage = ({ data }) => {
  
  return (
    <> 
    <div className={style.Product_container}>
      <Sidebar />
      <ProductList data={data} />
    </div>
    </>
  );
};

export default ProductPage;
