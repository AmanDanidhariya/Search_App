import React from "react";

const ProductCard = ({ data }) => {
  return (
    <>
      <div>ProductCard</div>
      {data.map((product) => {
        //discount 10%
        const discountedPrice = product.price * 0.9;
        return (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <div>
              <span>{product.price}</span>
              <span>{discountedPrice.toFixed(2)}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;
