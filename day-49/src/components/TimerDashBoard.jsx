import { useEffect } from "react";
import { useState } from "react"
import timerData from "../data/timer"
import Timer from "./Timer"
import TimerForm from "./TimerForm";

export default function TimerDashBoard() {
    const [timers, setTimers] = useState([]);
    const [runningTime, setRunningTime] = useState(0)

    useEffect(() => {
        setTimers(timerData);
    }, [timers])


    return (
        <div>
            <h1>Timers</h1>
            {
                timers && timers.map((data, index) => {
                    return <Timer key={index} project={data.project} title={data.title} elapsed={data.elapsed} runningSince={data.runningSince}/>
                })
            }
            <TimerForm project={"project"} title={"title"} />
        </div>
    )
}