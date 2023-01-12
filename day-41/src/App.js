
import './App.css';
import { useState } from 'react';
import Counter from './components/Counter';
import UpdateArrays from './components/UpdateArrays';
import List from './components/SpreadArray';
import UpdatingObjects from './components/UpdatingObjects';

function App() {
  const[counter, SetCounter] = useState(0)

  const[inputText, SetInputText] = useState("")

  function handleClick(){
    SetCounter(counter + 1)
  }
  function handleInput(event){
    SetInputText(event.target.value)
  }
  return (
    <div className="App">
      <div>
        <p>{counter}</p>
        <button onClick={() => handleClick()}>click</button>
      </div>
    <div>
        <input value={inputText} type="text" onChange={(e) => handleInput(e)}/>
        <p>{inputText}</p>
      </div>
      <UpdatingObjects/>
      <List/>
      <Counter/>
      <UpdateArrays/>
    </div>

  );
}

export default App;
