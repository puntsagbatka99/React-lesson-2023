import { useState } from 'react';
import './App.css';

function App() {
const [users, SetUsers] = useState([])

function handleRegister(event){
  event.preventDefault()

  const user = {
    firstname: event.target.firstname.value,
    lastname: event.target.lastname.value,
    password: event.target.password.value,
  }
  
  SetUsers([...users, user])
  console.log(users)
}
  return (
    <div className="App">
      <form 
        style={{display:"flex", flexDirection:"column", alignItems:"start"}} 
        onSubmit={handleRegister}
      >
        <label htmlFor="">FirstName:</label>
        <input type="text" placeholder="FirstName" name='firstname' />
        <label htmlFor="">LastName:</label>
        <input type="text" placeholder="LastName" name='lastname' />
        <label htmlFor="">Password:</label>
        <input type="text" placeholder="Password" name='password' />
        <label htmlFor="">Confirm Password:</label>
        <input type="text" placeholder="Confirm Password" name='confirmpassword' />
        <button>Register</button>
      </form>

      <h2>User Preview</h2>
      {users.map(u => {
        return(
          <div>
            <div>firstname:{u.firstname}</div>
            <div>lastname:{u.lastname}</div>
          </div>
        )
      })}
    </div>
  );
}

export default App;
