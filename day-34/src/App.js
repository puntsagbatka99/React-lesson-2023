
import './App.css';
import HelloWorld from "./HelloWorld"
import Product from '../../DAY-33/my-react-app-module/src/Product';

function App() {

  const user ={
    firstName: "Harper",
    lastName: "Perez"
  };
  function formatName(user){
    return user.firstName + " " + user.lastName;
  };

  // const element =(
  // <h1>Hello, {formatName(user)} </h1>
  // )

  const customStyle = {
    color: "#2ecc71",
    fontSize: "50px",
  }

  const element = <h1 style={customStyle}>Hello, Teacher</h1>

  const secondElement = (<p>My Next Text</p>)
  return (
    <div>
      {element}
      {secondElement}
      <HelloWorld/>
      <Product/>
    </div>
  );
}

export default App;
