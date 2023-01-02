
import image1 from './img/image-yellow.png'
import arrow from "./img/caret-up-fill.svg"
import profile from "./img/profile1.jpg"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Popular Product</h1>
        <hr/>
        <div id="container">
          <img class="image" src={image1} alt="image"/>
          <div id="contRightSide">
            <div id="smallHeader"><img src={arrow}/> <h4>55</h4></div>
            <p>Haught or Naught</p>
            <p>High-Minded or absent-minded? You decide.</p>
            <div id="submit"><p>Submitted by:</p> <img id="profile" src={profile}/> </div>
          </div> 
        </div>
      </header>
    </div>
  );
}

export default App;
