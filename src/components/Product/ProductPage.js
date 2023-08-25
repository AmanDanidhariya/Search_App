import React, { useEffect, useState } from "react";
import style from "./ProductPage.module.css";
import ProductList from "../ProductList/ProductList";
import FilterType from "../FilterType/FilterType";
import StarFilter from "../StarFilter/StarFilter";

const ProductPage = ({ data }) => {
  //array for selected star rating
  const allBrands = data.map((p) => p.department);
  const brandArray = allBrands;
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState(data);

  const priceArray = ["Under 250","250 To 500", "500 To 1000"];
  const starRatingOptions = [5, 4, 3, 2, 1];

  const handleRatingFilterChange = (rating) => {
    //check selectedRating array include clicked rating
    const updatedRatings = selectedRatings.includes(rating)
      ? selectedRatings.filter((selected) => selected !== rating)
      : [...selectedRatings, rating];
    setSelectedRatings(updatedRatings);
      // just undo's all filtering
  };

  const handleBrandFilterChange = (brand) => {
    const updatedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((selected) => selected !== brand)
      : [...selectedBrands, brand];
    setSelectedBrands(updatedBrands);
      // just undoes all filtering
  };

  const handlePriceRangeFilterChange = (priceRange) => {
    const updatedPriceRanges = selectedPriceRange.includes(priceRange)
      ? selectedPriceRange.filter((selected) => selected !== priceRange)
      : [...selectedPriceRange, priceRange];
    setSelectedPriceRange(updatedPriceRanges);
  };

  useEffect(() => {

      let brandMatches = [];
      let ratingMatches = [];
      let priceMatches = [];
    
      if(selectedBrands.length) {
	  brandMatches = data.filter(p => selectedBrands.includes(p.department));
      } 
      if(selectedRatings.length) {
	  ratingMatches = data.filter(p => selectedRatings.includes(Math.floor(parseInt(p.fakeRating) /2)));
      }
      if(selectedPriceRange.length) {
	  let rangeMap = {
      "Under 250"  :[0,250],
	      "250 To 500" : [250, 500],
	      "500 To 1000" : [500, 1000]
	  }
	  priceMatches =data.filter(p => { 
	      let ranges = selectedPriceRange.map(s => rangeMap[s])
		  .flat()
		  .sort((a,b) => a-b)
	      let min = ranges.at(0);
	      let max = ranges.at(-1);
	      return (p.price*0.9) > min && (p.price*0.9) < max;
	  })
      }

      if (brandMatches.length || ratingMatches.length || priceMatches.length) {

	  let all = [brandMatches, ratingMatches, priceMatches];

	  all.sort((a,b) => a.length - b.length);

	  let intersection = all.filter(a => a.length).length === 3
	      ? all[2]
	      .filter(b => all[1].map(i => i.id).includes(b.id))
	      .filter(m => all[0].map(i => i.id).includes(m.id))
	      : all.filter(a => a.length).length === 2
	      ? all[2].filter(b => all[1].map(i => i.id).includes(b.id))
	      : all.filter(a => a.length)[0]


	  setFilteredProducts(intersection);
      }
	  

  }, [selectedBrands, selectedRatings, selectedPriceRange]);

  return (
    <>
      <div className={style.Product_container}>
        <div className={style.filter_section}>
          <div className={style.search_result}>Search Results</div>
          <FilterType
            filterHeader="Brand"
            filterTypeData={brandArray}
            onFilterChange={handleBrandFilterChange}
          />
          <FilterType
            filterHeader="Price Range"
            filterTypeData={priceArray}
            onFilterChange={handlePriceRangeFilterChange}
          />
          <StarFilter
            starRatingOptions={starRatingOptions}
            selectedRatings={selectedRatings}
            onRatingFilterChange={handleRatingFilterChange}
          />
        </div>
          <ProductList data={(selectedRatings.length || selectedPriceRange.length || selectedBrands.length ) ? filteredProducts : data} />
      </div>
    </>
  );
};

export default ProductPage;
