import { Routes, Route, Link } from "react-router-dom"
import './App.css';
import About from "./components/About";
import Khangai from "./components/about/khangai";
import Usukhuu from "./components/about/usukhuu";
import FeedBackForm from "./components/FeedbackForm";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import NotFound from "./components/NotFound";
import Register from "./components/Register";


function App() {
  return (
    <div>
      <h1>DaY-43 React Route</h1>
      <div id="navbar">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/log-in">Login</Link>
        <Link href="/register">Register</Link>
        <Link href="/feedback">Feedback</Link>
      </div>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about/*" element={<About/>}>
            <Route path="khangai" element={<Khangai/>}/>
            <Route path="usukhuu" element={<Usukhuu/>}/>
          </Route>
          <Route path="/log-in" element={<LogIn/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/feedback" element={<FeedBackForm/>}/>
          <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App;
