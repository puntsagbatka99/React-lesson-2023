import { useState } from "react"

export default function UpdatingObjects(){
    // const user = {age: 19, name: "Dorj"};
    // user.age = 20;
    // console.log(user)

    const [user, setUser] = useState({age: 19, name: "Dorj"})

    const check = () => {
        setUser({age: user.age+20, name: "Dorj"})
    }
    return(
        <div>
            updating objects
            <button onClick={check}>
                user age is {user.age}
            </button>
        </div>
    )
}