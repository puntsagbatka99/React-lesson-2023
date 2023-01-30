import {useEffect, useState} from "react"
import './App.css';

function App() {

  const URL = "http://localhost:8080/users"

  const [users, setUsers] = useState([]);

  async function fetchAllData(){
    // fetch a data from localhost8080
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data)
  }
  
  useEffect(() => {
    fetchAllData()
  }, [])

  async function handleSubmit(e){
    e.preventDefault();
    const postData = {
      username: e.target.username.value,
      age: e.target.age.value,
    }

    const options ={
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    }

    const FETCHED_DATA = await fetch (URL, options)
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON)
    setUsers(FETCHED_JSON.data)
  }

  async function handleDelete(userId){
    const options ={
      method:"DELETE",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: userId,
      })
    }

    const FETCHED_DATA = await fetch(URL, options)
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data)
  }
  return (
    <div className="App">
      <h1>DAY-52 NodeJS FS Modyle</h1>
      <h3>Create User FORM</h3>
      <form onSubmit={handleSubmit}>
        <label >UserName:
          <input type="text" name="username" />
        </label>
        <br />
        <label htmlFor="">Age:
          <input type="text"  name="age"/>
        </label>
        <br />
        <button>Submit</button>
      </form>
      <h3>Users List</h3>
      {
        users && users.map((user, index) => {
          return(
            <div key={index}>
              <p>{user.username} : {user.age} {""} <button onClick={()=> handleDelete(user.id)}>Delete</button></p>
              
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
