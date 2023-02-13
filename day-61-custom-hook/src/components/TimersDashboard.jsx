import { useContext, useEffect, useState } from "react";
import { newTimer } from "./Helpers";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm.jsx";
import { TimerContext } from "../context/TimerContext";

export default function TimersDashboard() {
  const URL = "http://localhost:8080/timers";

  function handleCreateFormSubmit(timer) {
    // createTimer(timer);
  }

  function handleEditFormSubmit(attrs) {
    // updateTimer(attrs);
  }

  return (
    <div>
      <h1>Timers</h1>

        <div>
          <EditableTimerList onFormSubmit={handleEditFormSubmit}/>
          <ToggleableTimerForm onFormSubmit={handleCreateFormSubmit} />
        </div>
    </div>
  );
}