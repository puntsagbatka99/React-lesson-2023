import {Routes, Route} from "react-router-dom"
import { ToastContainer } from "react-toastify";
import './App.css';
import Categories from "./components/Categories";
import CategoryForm from "./components/CategoryForm";
import CategoryEditForm from "./components/CategoryEditForm";

function App() {
  return (
    <div className="App">
      <h1>DAY-63 Category CRUD</h1>
      <Routes>
        <Route path="/category/add" element={<CategoryForm/>}/>
        <Route path="/category/list" element={<Categories/>}/>
        <Route path="/category/edit/:id" element={<CategoryEditForm/>}/>
        <Route path="/category/delete/:id" element={null}/>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
