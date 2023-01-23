
import './App.css';
import Input from './components/Input';
import { useState } from 'react';

function App() {
  const [text, setText] = useState("")

  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <div className="App">
      <Input
        label="first label"
        value={text}
        onChange={handleChange} />
      <Input
        label="second label"
        value={text}
        onChange={handleChange} />
    </div>
  );
}

export default App;
