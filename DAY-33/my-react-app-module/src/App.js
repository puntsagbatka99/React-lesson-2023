import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
import ProductFunc from "./ProductFunc";
import products from "./seed";
import { useState } from "react";

function App() {
  
  const [productsList, setProductsList] = useState(products)

  function handleProductUpVote(productId){
    console.log("upVoted", productId)

    const newProducts = productsList.map (product=>{
      if(product.id == productId){
        return Object.assign({}, product, {
          votes: product.votes + 1
        })
      } else {
        return product
      }
    })
    console.log(newProducts)

    setProductsList(newProducts);
  }

  function handleProductDownVote(productId){
    console.log("downVoted", productId)
    const newProducts = productsList.map (product=>{
      if(product.id == productId){
        return Object.assign({}, product, {
          votes: product.votes - 1
        })
      } else {
        return product
      }
    })
    console.log(newProducts)

    setProductsList(newProducts);
  }
  
const productComponent = productsList.map((product) =>{
    return <ProductFunc 
          title= {product.title}
          id={product.id}
          description = {product.description}
          url = {product.url}
          votes = {product.votes}
          submitterAvatarUrl = {product.submitterAvatarUrl}
          productImageUrl = {product.productImageUrl}
          stars = {product.stars}
          onVote = {handleProductUpVote}
          onVoteDown = {handleProductDownVote}
    />
  })
  return (
    <div className="App">
      <header className="App-header">
        <h1>Popular Product</h1>
        <hr/>
        {productComponent}

      </header>
    </div>
  );
}

export default App;
