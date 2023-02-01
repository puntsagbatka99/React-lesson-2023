import { Routes, Route } from 'react-router-dom';
import './App.css';
import Users from './pages/Users';
import Products from "./pages/Products"
import Home from './components/Home';
import NewUsers from './components/NewUsers';

function App() {
  return (
    <div className="App">
      <h1>Admin Panel Project</h1>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/users/new-users' element={<NewUsers/>}/>
      </Routes>
    </div>
  );
}

export default App;
