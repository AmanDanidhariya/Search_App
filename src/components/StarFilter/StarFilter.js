import React from "react";
import style from "./StarFilter.module.css";
import { FaStar } from "react-icons/fa";

const StarFilter = ({
  starRatingOptions,
  selectedRatings,
  onRatingFilterChange,
}) => {
  return (
    <div className={style.starFilter}>
      <h3>Rating</h3>
      {starRatingOptions.map((rating) => (
        <label key={rating}>
          <input
            type="checkbox"
            checked={selectedRatings.includes(rating)}
            onChange={() => onRatingFilterChange(rating)}
          />
          {/* generate gold star for selected rating */}
          {[...Array(rating)].map((_, index) => (
            <span key={index} className={`${style.gold} ${style.mr}`}>
              <FaStar />
            </span>
          ))}
          {/* generate gray star for remaining part */}
          {[...Array(5 - rating)].map((_, index) => (
            <span key={index} className={`${style.gray} ${style.mr}`}>
              <FaStar />
            </span>
          ))}
        </label>
      ))}
    </div>
  );
};

export default StarFilter;
