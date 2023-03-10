import { Link } from "react-router-dom";
import Header from "./Header";

export default function Home() {
  return (
    <div>
      <Header/>
      <h1>Day-45 React Dynamic Routing</h1>
      <nav style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to={"/accordion"}>Accordion</Link>
        <Link to={"/login"}>Log-In</Link>
        <Link to={"/register"}>Register</Link>
      </nav>
    </div>
  );
}
