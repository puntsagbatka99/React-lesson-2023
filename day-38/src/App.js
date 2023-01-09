import './App.css';
import Button from './Components/Button';
import AlertButton from "./Components/AlertFunc"
import ToolBar from './Components/ToolBar';
import ToolBarNew from './Components/ToolBarNew';
import ParentToolBar from './Components/ParentToolBar';
import SignUp from './Components/SignUp';


function App() {
  return (
    <div className="App">
      <h1>DAY-38 REACT EVENTS</h1>
      <Button/>
      <AlertButton/>
      <ToolBar/>
      <ToolBarNew/>
      <ParentToolBar/>
      <SignUp/>
    </div>
  );
}

export default App;
