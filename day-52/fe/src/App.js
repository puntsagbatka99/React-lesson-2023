import { useEffect, useState } from "react"
import './App.css';

function App() {

  const URL = "http://localhost:8080/users"
  const newUser = {
    id: "",
    username: "",
    age: ""
  }

  const [users, setUsers] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false)
  const [currentUser, setCurrentUser] = useState(newUser)

  async function fetchAllData() {
    // fetch a data from localhost8080
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data)
  }

  useEffect(() => {
    fetchAllData()
  }, [])

  async function handleSubmit(e) {
    e.preventDefault();

    if (!isUpdate) {
      const postData = {
        username: e.target.username.value,
        age: e.target.age.value,
      }

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
      }

      const FETCHED_DATA = await fetch(URL, options)
      const FETCHED_JSON = await FETCHED_DATA.json();
      console.log(FETCHED_JSON)
      setUsers(FETCHED_JSON.data)
    } else {
      const putData = {
        id: currentUser.id,
        username: currentUser.username,
        age: currentUser.age
      }

      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(putData)
      }
      const FETCHED_DATA = await fetch(URL, options)
      const FETCHED_JSON = await FETCHED_DATA.json();
      console.log(FETCHED_JSON)
      setUsers(FETCHED_JSON.data)
      setIsUpdate(false)
      setCurrentUser(newUser)
    }

  }

  async function handleDelete(userId) {
    const options = {
      method: "DELETE",
      headers: {
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

  async function handleEdit(userId) {
    console.log(userId)
    setIsUpdate(true)
    const filteredUser = users.filter(user => user.id === userId)[0]
    if (filteredUser) {
      setCurrentUser({
        id: filteredUser.id,
        age: filteredUser.age,
        username: filteredUser.username
      })
    }
  }

  function handleUserName(e) {
    setCurrentUser({
      ...currentUser,
      username: e.target.value
    })
  }
  function handleUserAge(e) {
    setCurrentUser({
      ...currentUser,
      age: e.target.value
    })
  }
  return (
    <div className="App">
      <h1>DAY-52 NodeJS FS Modyle</h1>
      <h3>Create User FORM</h3>
      <form onSubmit={handleSubmit}>

        <label >UserName:
          <input type="text" name="username" value={currentUser.username} onChange={handleUserName} />
        </label>
        <br />
        <label htmlFor="">Age:
          <input type="text" name="age" value={currentUser.age} onChange={handleUserAge} />
        </label>
        <br />
        <button>
          {
            isUpdate ? "Update" : "Submit"
          }
        </button>
      </form>
      <h3>Users List</h3>
      {
        users && users.map((user, index) => {
          return (
            <div key={index}>
              <p>{user.username} : {user.age}
                {""}
                <button onClick={() => handleDelete(user.id)}>Delete</button>
                {" "}
                <button onClick={() => handleEdit(user.id)}>Edit</button></p>

            </div>
          )
        })
      }
    </div>
  );
}

export default App;
