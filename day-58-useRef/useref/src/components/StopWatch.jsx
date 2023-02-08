import { useState, useRef } from "react";

export default function StopWatch(){
    const [ now, setNow ] = useState(0);
    const [ startTime, setStartTime ] = useState(0);
    const timeRef = useRef(0);

    function handleStart(){
        setStartTime(Date.now())
        timeRef.current = setInterval(() => {
            setNow(Date.now());
        }, 1000)
    };
    function handleStop(){
        clearInterval(timeRef.current);
    };

    const timer = now - startTime < 0 ? 0 : Math.floor((now - startTime)/1000);
    return(
        <div>
            <h1>{timer}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>

        </div>
    )
}