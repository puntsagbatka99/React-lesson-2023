import { useState } from "react"

export default function Counter(){
    const [add , setAdd] = useState(0);
    function AddSda(){
        setAdd(add + 1);
    }
    
    return(
        <div className="counter hover">
            <p>{add}</p>
            <button onClick={AddSda}>Add one</button>
        </div>
    )
}