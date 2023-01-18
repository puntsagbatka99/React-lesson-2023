import Panel from './components/Panel';
import Accordion from './components/Accordion';
import {Route, Routes} from "react-router-dom"
import Index from './components/Index';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Index/>}/>
        <Route path="/accordion" element={<Accordion/>}/>
        <Route path="/panel" element={<Panel/>}/>
      </Routes>
    </div>
  );
}

export default App;
