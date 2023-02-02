import { useEffect, useState } from "react"
import './App.css';
// import {   fetchAllData, deleteUser, createUser,updateUser   } from "./services/usersServices";
import { fetchAllData, deleteUser, createUser,updateUser } from "./services/axiosUsersServices";
function App() {

  const URL = "http://localhost:8000/users"
  const newUser = {
    id: "",
    username: "",
    age: ""
  }

  const [users, setUsers] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false)
  const [currentUser, setCurrentUser] = useState(newUser)

  useEffect(() => {
    fetchAllData(URL, setUsers)
  }, [])

  async function handleSubmit(e) {
    e.preventDefault();

    if (!isUpdate) {
      updateUser(e, URL, setUsers)
    } else {
      createUser(currentUser, URL, setUsers, setCurrentUser, setIsUpdate, newUser) 
    }
  }

  async function handleDelete(userId) {
    deleteUser(userId, URL, setUsers)
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
