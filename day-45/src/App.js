import Panel from "./components/Panel";
import Accordion from "./components/Accordion";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Index";
import "./App.css";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Header />} />{" "}
        <Route path={"/Home"} element={<Home />} />{" "}
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/panel" element={<Panel />} />
      </Routes>
    </div>
  );
}

export default App;
