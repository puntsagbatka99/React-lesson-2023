import './App.css';

function Profile (props){
  //destructuring
  const {img, name, age, gender} = props;
  return (
    <div className="profile">
      {/* <img src={props.img} alt="people"/>
      <p>name: {props.name}</p>
      <p>age: {props.age}</p>
      <p>gender: {props.gender}</p> */}
      <img src={img} alt="people"/>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <p>gender: {gender}</p>
    </div>
  )
}

function App() {
  // const user = {
  //   name: "John Smith",
  //   age: 20,
  //   gender: "male"
  // }
  return (
    <div className="App">
      <Profile 
      // {...user}
        name="John Smith"
        age={20}
        gender="male"
      />
      <Profile 
        name="Jamal Smith"
        age={25}
        gender="male"
      />
    </div>
  );
}

export default App;
