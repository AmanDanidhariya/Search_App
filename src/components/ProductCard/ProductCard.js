import React from "react";
import style from "./ProductCard.module.css";

const ProductCard = ({ data }) => {
  return (
    <div className={style.productCard_container}>
      {data.map((product) => {
        //discount 10%
        const discountedPrice = product.price - (product.price * 10) / 100;
        return (
          <div key={product.id} className={style.product}>
            <div className={style.product_image_container}>
              <img
                src={product.image}
                alt={product.productName}
                className={style.product_image}
              />
              <div className={style.product_overlay}>
                <button className={style.view_product_button}>
                  View Product
                </button>
              </div>
            </div>

            <p className={style.product_name}>{product.productName}</p>
            <div>
              <span className={style.product_price}>Rs. {product.price}</span>
              <span className={style.discount_price}>
                Rs. {discountedPrice.toFixed(0)}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
