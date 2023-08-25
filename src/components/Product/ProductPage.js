import React, { useState } from "react";
import style from "./ProductPage.module.css";
import ProductList from "../ProductList/ProductList";
import FilterType from "../FilterType/FilterType";
import StarFilter from "../StarFilter/StarFilter";

const ProductPage = ({ data }) => {
  const [selectedRatings, setSelectedRatings] = useState([]);
  const brandArray = ["Mango", "H&M"];
  const priceArray = ["Under 500", "1000To 3000"];
  const starRatingOptions = [5, 4, 3, 2, 1];

  const handleRatingFilterChange = (rating) => {
    const updatedRatings = selectedRatings.includes(rating)
      ? selectedRatings.filter((selected) => selected !== rating)
      : [...selectedRatings, rating];

    setSelectedRatings(updatedRatings);
  };

  return (
    <>
      <div className={style.Product_container}>
        {/* <Sidebar filterHeader={filterHeader} filterTypeData={filterTypeData}/> */}
        <div className={style.filter_section}>
        <div className={style.search_result}>Search Results</div>
          <FilterType filterHeader="Brand" filterTypeData={brandArray} />
          <FilterType
            filterHeader="Price Range"
            filterTypeData={priceArray}
          />
          <StarFilter
            starRatingOptions={starRatingOptions}
            selectedRatings={selectedRatings}
            onRatingFilterChange={handleRatingFilterChange}
          />
        </div>
        <ProductList data={data} />
      </div>
    </>
  );
};

export default ProductPage;
