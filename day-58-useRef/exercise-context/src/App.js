
import { useContext, useState } from 'react';
import './App.css';
import List from './components/List';
import { PlaceContext } from './context/PlaceContext';

function App() {
  const [isLarge, setIsLarge, imageSize] = useContext(PlaceContext)
   
  return (
    <div className="App">
      <label>
        Use large image
      </label>
      <input type="checkbox" onChange={(e) => {
        setIsLarge(e.target.checked)
        console.log(e.target.checked)
      }}/>
      <hr />
        <List/>
    </div>
  );
}

export default App;
