import React, { useState } from "react";
import style from "./ProductCard.module.css";
import { FaHeart } from "react-icons/fa";
import RatingStars from "../RatingStars/RatingStars";

const ProductCard = ({ data }) => {
  //array for stor product_id
  const [isLiked, setIsLiked] = useState([]);

  const handleLike = (productId) => {
    if (isLiked.includes(productId)) {
      setIsLiked(isLiked.filter((id) => id !== productId));
    } else {
      //update the isLiked array
      setIsLiked([...isLiked, productId]);
    }
  };

  return (
    <div className={style.productCard_container}>
      {data.map((product) => {
        //discount 10%
        const discountedPrice = product.price - (product.price * 10) / 100;
        //check if the product liked
        const liked = isLiked.includes(product.id);

        return (
          <div key={product.id} className={style.product}>
            <div className={style.product_image_container}>
              <button onClick={() => handleLike(product.id)}>
                <FaHeart
                  className={style.heart}
                  color={liked ? "red" : "white"}
                />
              </button>
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
            <span className={style.product_price}>Rs. {product.price}</span>
            <span className={style.discount_price}>
              Rs. {discountedPrice.toFixed(0)}
            </span>
	      <span className={style.department}>{product.department}</span>
              <RatingStars value={Math.floor(parseInt(product.fakeRating) / 2)}/>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
