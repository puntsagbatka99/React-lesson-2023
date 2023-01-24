import { useState } from "react"

export default function Counter({isFancy}){
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);

    let className = "counter";
    if(hover){
        className += " hover"
    }
    if(isFancy){
        className += " fancy"
    }

    function Score(){
        setScore(score + 1)
    }
    return(
        <div
        className={className}
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}>
            <h1>{score}</h1>
            <button onClick={Score}>Add One</button>
        </div>
    )
}