import { useState } from "react";
import { Navigate } from "react-router-dom";
import Header from "./Header";
export default function Register() {
    const[ formSubmitted, setFormSubmitted ] = useState(false);

    if(formSubmitted){
        return <Navigate to={"/login"} />;
    }

    const handleSubmit = function(event){
        event.preventDefault()
        setFormSubmitted(true)
    }
    return (
        <div>
            <Header/>
            <h1>Register Page</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstname">Firstname: </label>
                <input type="text" name="firstname" />
                <br />
                <label htmlFor="lastname">Lastname: </label>
                <input type="text" name="lastname" />
                <br />
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" />
                <br />
                <label htmlFor="phoneNumber">Phone: </label>
                <input type="number" name="phoneNumber" />
                <br />
                <button>Register</button>
                
            </form>
        </div>
    )
}