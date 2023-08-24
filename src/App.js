import "./App.css";
import { faker } from "@faker-js/faker";
import Logo from "./components/Logo/Logo";
import Searchbar from "./components/Searchbar/Searchbar";
import Trends from "./components/Trends/Trends";
import { useEffect, useState } from "react";
import ProductPage from "./components/Product/ProductPage";

function trendsProduct() {
  return{
    id: faker.string.uuid(),
    product: faker.commerce.product(),
    department: faker.commerce.department(),
    price: faker.commerce.price(),
    productAdjective: faker.commerce.productAdjective(),
    productName: faker.commerce.productName(),
    image: faker.image.url(),
    // fakeRating : faker.random.number({ min: 1, max: 5 }),
  };
}

let ProductsArray = faker.helpers.multiple(trendsProduct, { count: 20 });


function App() {
  const [searchQuery, setSearchQuery] = useState(null);
  const [showLatestTrends, setShowLatestTrends] = useState(false);
  const [Products] = useState(ProductsArray);

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
      <ProductPage data={Products}/>
    </div>
  );
}

export default App;
