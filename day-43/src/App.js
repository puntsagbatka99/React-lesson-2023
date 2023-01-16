import { Routes, Route } from "react-router-dom"
import './App.css';
import About from "./components/About";
import FeedBackForm from "./components/FeedbackForm";
import LogIn from "./components/LogIn";
import Register from "./components/Register";


function App() {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/about" element={<About/>}/>
          <Route path="/log-in" element={<LogIn/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/feedback" element={<FeedBackForm/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
