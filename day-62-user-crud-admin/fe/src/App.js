import { Route, Routes } from "react-router-dom"
import './App.css';
import LoginForm from "./components/LoginForm";
import UserRegisterForm from './components/UserRegisterForm';
import Users from "./components/Users";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <h1>DAY-62 USER LOGIN FORM</h1>
      <Routes>
        <Route path="/register" element={<UserRegisterForm/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/login" element={<LoginForm/>}/>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
