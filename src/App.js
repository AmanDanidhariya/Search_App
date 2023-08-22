import './App.css';
import { faker } from "@faker-js/faker";

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

    console.log(products5);

function App() {



    return (
    <>
        
    </>
  );
}

export default App;
