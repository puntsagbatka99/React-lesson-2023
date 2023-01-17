import './App.css';
import Panel from './components/Panel';
import Accordion from './components/Accordion';
import {Route, Routes} from "react-router-dom"
import Index from './components/Index';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import Movies from './components/Movies';
import Movie from './components/Movie';
import Gallery from './components/ImageGallery';
import ToasterPage from './components/ToasterPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Index/>}/>
        <Route path={"/about"} element={<AboutPage/>}/>
        <Route path={"/home"} element={<HomePage/>}/>
        <Route path="/accordion" element={<Accordion/>}/>
        <Route path="/panel" element={<Panel/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movie/:id" element={<Movie/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/toast" element={<ToasterPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
