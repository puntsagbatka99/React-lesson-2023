import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <h1>Header</h1>
      <nav style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to={"/login"}>Log-In</Link>
        <Link to={"/register"}>Register</Link>
        <Link to={"/accordion"}>Accordion</Link>
      </nav>
    </div>
  );
}
