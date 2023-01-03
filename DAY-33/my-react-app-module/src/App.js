import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
import Product from './Product';
import Product2 from './Product2';
import Product3 from './Product3';
import Product4 from './Product4';
import { ProductFunc, ProductFunc2, ProductFunc3, ProductFunc4 } from "./ProductFunc";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Popular Product</h1>
        <hr/>
        <Product/>
        <Product2/>
        <Product3/>
        <Product4/>
        <ProductFunc/>
        <ProductFunc2/>
        <ProductFunc3/>
        <ProductFunc4/>

      </header>
    </div>
  );
}

export default App;
