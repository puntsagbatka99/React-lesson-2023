
import image1 from './img/image-yellow.png'
import arrow from "./img/caret-up-fill.svg"
import profile from "./img/profile1.jpg"
import image2 from './img/image-aqua.png'
import image3 from './img/image-steel.png'
import image4 from './img/image-rose.png'
import image5 from './img/image.png'
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
            <p id="nameP">Haught or Naught</p>
            <p>High-Minded or absent-minded? You decide.</p>
            <div id="submit"><p id="submitP">Submitted by:</p> <img id="profile" src={profile}/> </div>
          </div> 
        </div>

        <div id="container">
          <img class="image" src={image2} alt="image"/>
          <div id="contRightSide">
            <div id="smallHeader"><img src={arrow}/> <h4>44</h4></div>
            <p id="nameP">Yellow Pail</p>
            <p>On-demand sand castle construction expertise.</p>
            <div id="submit"><p id="submitP">Submitted by:</p> <img id="profile" src={profile}/> </div>
          </div> 
        </div>

        <div id="container">
          <img class="image" src={image3} alt="image"/>
          <div id="contRightSide">
            <div id="smallHeader"><img src={arrow}/> <h4>42</h4></div>
            <p id="nameP">Tinfoild: Tailored tinfoil hats</p>
            <p>We already have your measurements and shipping address.</p>
            <div id="submit"><p id="submitP">Submitted by:</p> <img id="profile" src={profile}/> </div>
          </div> 
        </div>

        <div id="container">
          <img class="image" src={image4} alt="image"/>
          <div id="contRightSide">
            <div id="smallHeader"><img src={arrow}/> <h4>23</h4></div>
            <p id="nameP">Supermajority: The Fantasy Congress League</p>
            <p>Earn points when your favorite politicians pass legislation.</p>
            <div id="submit"><p id="submitP">Submitted by:</p> <img id="profile" src={profile}/> </div>
          </div> 
        </div>

      </header>
    </div>
  );
}

export default App;
