
import './App.css';
import Input from './components/Input';
import { useState } from 'react';
import Anime from './components/Anime';
import Button from './components/Button';
import TopAnime from './components/TopAnime';
import Exercises from './Exercise/Exercises';

function App() {
  const [text, setText] = useState("")

  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <div className="App">
      {/* <Input
        label="first label"
        value={text}
        onChange={handleChange} />
      <Input
        label="second label"
        value={text}
        onChange={handleChange} />
        <Anime/>
        <Button/>
        <TopAnime/> */}
        <Exercises/>
    </div>
  );
}

export default App;
