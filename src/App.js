import "./App.css";
import { faker } from "@faker-js/faker";
import Logo from "./components/Logo/Logo";
import Searchbar from "./components/Searchbar/Searchbar";
import Trends from "./components/Trends/Trends";
import { useEffect, useState } from "react";

function trendsProduct() {
  return{
    id: faker.string.uuid(),
    product: faker.commerce.product(),
    department: faker.commerce.department(),
    price: faker.commerce.price(),
    productAdjective: faker.commerce.productAdjective(),
    productName: faker.commerce.productName(),
    image: faker.image.url(),
  };
}

let ProductsArray = faker.helpers.multiple(trendsProduct, { count: 50 });


function App() {
  const [searchQuery, setSearchQuery] = useState(null);
  const [showLatestTrends, setShowLatestTrends] = useState(false);
  const [Products , setProducts] = useState(ProductsArray);

  const handleSearchQueryChange = (queryData) => {
    setSearchQuery(queryData);
    //if searchQuery has length showLatestTrends will be false
    setShowLatestTrends(queryData.length === 0);
  };

  useEffect(()=>{
    console.log(searchQuery);
  },[searchQuery]);
  

  const handleTrends = () => {
    setShowLatestTrends(!showLatestTrends);
  };

  const handleBlurSearch = () => {
    setShowLatestTrends(false);
  };

  return (
    <div className="main_container">
      <Logo />
      <Searchbar
        onFocus={handleTrends}
        onBlur={handleBlurSearch}
        onSearchQueryChange={handleSearchQueryChange}
      />
      {showLatestTrends && <Trends data={Products} />}
    </div>
  );
}

export default App;
