import { Routes, Route } from 'react-router-dom';
import './App.css';
import Users from './pages/Users';
import Products from "./pages/Products"
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <h1>Admin Panel Project</h1>
      <Home/>
      <Routes>
        <Route path='/users' element={<Users/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
    </div>
  );
}

export default App;
