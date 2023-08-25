import "./App.css";
import { faker } from "@faker-js/faker";
import Logo from "./components/Logo/Logo";
import Searchbar from "./components/Searchbar/Searchbar";
import Trends from "./components/Trends/Trends";
import { useState } from "react";
import ProductPage from "./components/Product/ProductPage";

function trendsProduct() {
  return {
    id: faker.string.uuid(),
    product: faker.commerce.product(),
    department: faker.commerce.department(),
    price: faker.commerce.price(),
    productAdjective: faker.commerce.productAdjective(),
    productName: faker.commerce.productName(),
    image: faker.image.url(),
    fakeRating: faker.string.numeric({ min: 1, max: 5 }),
  };
}

let productsArray = faker.helpers.multiple(trendsProduct, { count: 20 });

function App() {
  const [showLatestTrends, setShowLatestTrends] = useState(false);
  const [products, setProductsData] = useState(productsArray);

  const handleSearchQueryChange = (queryData) => {
    const filteredProducts = productsArray.filter((product) =>
      product.productName.toLowerCase().includes(queryData.toLowerCase())
    );

    setProductsData(filteredProducts);

    if (queryData.length) {
      setShowLatestTrends(false);
    } else {
      setShowLatestTrends(true);
    }
    setProductsData(filteredProducts);
  };

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
      {showLatestTrends && <Trends data={productsArray} />}
      <ProductPage data={products} />
    </div>
  );
}

export default App;
