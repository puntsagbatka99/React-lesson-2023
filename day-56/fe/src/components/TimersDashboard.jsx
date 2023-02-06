import { useEffect, useState } from "react";
import { newTimer } from "../components/Helpers";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm.jsx";
import projects from "../data/data.js";

export default function TimersDashboard() {
    const [timers, setTimers] = useState({ timers: [] });

    const URL = "http://localhost:8080/timers";
    useEffect(() => {
        fetchTimersData()
    }, [])

    useEffect(() => {
        deleteTimer()
    }, [])

    // useEffect(() => {
    //     setInterval(() => setTimers({ timers: projects }), 1000);
    // }, []);

    async function fetchTimersData() {
        const FETCHED_DATA = await fetch(URL)
        const FETCHED_JSON = await FETCHED_DATA.json();
        console.log(FETCHED_JSON)
        setTimers({ timers: FETCHED_JSON.data })
    }

    async function deleteTimer(userId) {
        const options = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: userId
            })
        }
        const FETCHED_DATA = await fetch(URL, options);
        const FETCHED_JSON = await FETCHED_DATA.json();
        setTimers({ timers: FETCHED_JSON.data })
    }

    async function handleCreateFormSubmit(timer) {
        const newUser = {
            title: timer.title,
            project: timer.project,
        }
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        }
        const FETCHED_DATA = await fetch(URL, options);
        const FETCHED_JSON = await FETCHED_DATA.json();
        setTimers({ timers: FETCHED_JSON.data })
    }

    async function handleEditFormSubmit(attrs) {
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(attrs)
        }
        const FETCHED_DATA = await fetch(URL, options);
        const FETCHED_JSON = await FETCHED_DATA.json();
        setTimers({ timers: FETCHED_JSON.data })
    }

    function handleTrashClick(timerId) {
        deleteTimer(timerId);
    }

    function handleStartClick(timerId) {
        startTimer(timerId);
    }

    function handleStopClick(timerId) {
        stopTimer(timerId);
    }

    function startTimer(timerId) {
        const now = Date.now();
        setTimers({
            timers: timers.timers.map((timer) => {
                if (timer.id === timerId) {
                    console.log(timer);
                    timer.runningSince = now;
                    return timer;
                } else {
                    return timer;
                }
            }),
        });
    }

    function stopTimer(timerId) {
        const now = Date.now();

        setTimers({
            timers: timers.timers.map((timer) => {
                if (timer.id === timerId) {
                    const lastElapsed = now - timer.runningSince;
                    timer.elapsed = timer.elapsed + lastElapsed;
                    timer.runningSince = null;
                }
                return timer;
            }),
        });
    }

    // function updateTimer(attrs) {
    //     setTimers({
    //         timers: timers.timers.map((timer) => {
    //             if (timer.id === attrs.id) {
    //                 timer.title = attrs.title;
    //                 timer.project = attrs.project;
    //             }
    //             return timer;
    //         }),
    //     });
    // }

    return (
        <div>
            <h1>Timers</h1>
            {timers.timers && (
                <div>
                    <EditableTimerList
                        timers={timers.timers}
                        onFormSubmit={handleEditFormSubmit}
                        onTrashClick={handleTrashClick}
                        onStartClick={handleStartClick}
                        onStopClick={handleStopClick}
                    />
                    <ToggleableTimerForm onFormSubmit={handleCreateFormSubmit} />
                </div>
            )}
        </div>
    );
}