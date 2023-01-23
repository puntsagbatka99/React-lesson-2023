import { useState } from "react"
import { useEffect } from "react"

export default function Anime (){
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("my anime")
        setCount(count + 1)
    }, [])
    console.log(count)
    
    function handleClick(e){
        console.log("you clicked")
    }
    return(
        <div>
            <h1>DAY-48 UseEffect with Anime</h1>
            <button onClick={(e) => {
                handleClick(e)
            }}>Anime Click</button>
        </div>
    )
}