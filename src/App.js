import './App.css';
import { faker } from "@faker-js/faker";
import Logo from './components/Logo/Logo';
import Searchbar from './components/Searchbar/Searchbar';
import Trends from './components/Trends/Trends';
import { useEffect, useState } from 'react';

    function trendsProduct () {
	return {
	    id: faker.string.uuid(),
	    product: faker.commerce.product(),
	    department: faker.commerce.department(),
	    price: faker.commerce.price(),
	    productAdjective: faker.commerce.productAdjective(),
	    productName: faker.commerce.productName(),
	    image: faker.image.url()
	}
    }

    let trendsProductsArray = faker.helpers.multiple(trendsProduct, { count: 5, });

function App() {
    const[showLatestTrends, setShowLatestTrends] = useState(true);
    const [trendProducts , setTrendsProducts ] =  useState(trendsProductsArray);

    return (
    <div className='main_container'>
        <Logo/>
        <Searchbar />
        <Trends data={trendProducts}/>

    </div>
  );
}

export default App;
