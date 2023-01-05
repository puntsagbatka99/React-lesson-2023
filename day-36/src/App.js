
import './App.css';
import MainMenu from './components/MainMenu';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div className='menu-container'>
        <MainMenu/>
      </div>
       <h1>React Bootstrap Component</h1>
       <Button variant="primary">click here</Button>
    </div>
  );
}

export default App;
