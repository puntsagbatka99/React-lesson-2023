import './App.css';

function Profile (props){
  return (
    <div className="profile">
      <img src={props.img} alt="people"/>
      <p>name: {props.name}</p>
      <p>age: {props.age}</p>
      <p>gender: {props.gender}</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Profile 
        name="John Smith"
        age={20}
        gender="male"
      />
    </div>
  );
}

export default App;
