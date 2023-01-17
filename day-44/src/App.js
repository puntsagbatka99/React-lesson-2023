import logo from './logo.svg';
import './App.css';
import Panel from './components/Panel';
import Accordion from './components/Accordion';
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <h1>DAY-44 React Route</h1>
      <Accordion/>
      <Routes>
        <Route path="/panel" element={<Panel/>}/>
        <Route path="/accordion" element={<Accordion/>}/>
      </Routes>
    </div>
  );
}

export default App;
