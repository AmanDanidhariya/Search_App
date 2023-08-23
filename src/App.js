import './App.css';
import { faker } from "@faker-js/faker";
import Logo from './components/Logo/Logo';
import Searchbar from './components/Searcbar/Searchbar';

    function createRandomProduct () {
	return {
	    id: faker.datatype.uuid(),
	    product: faker.commerce.product(),
	    department: faker.commerce.department(),
	    price: faker.commerce.price(),
	    productAdjective: faker.commerce.productAdjective(),
	    productName: faker.commerce.productName(),
	    image: faker.image.fashion()
	}
    }

    let products5 = faker.helpers.multiple(createRandomProduct, { count: 10, });


function App() {
    return (
    <div className='main_container'>
    <div className='content'>
        <Logo/>
        <Searchbar/>
    </div>
        
    </div>
  );
}

export default App;
