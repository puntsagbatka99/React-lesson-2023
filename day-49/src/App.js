import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { useState } from 'react';
import Timer from './components/Timer';
import TimerDashBoard from './components/TimerDashBoard';

function App() {
  return (
    <div>
      <h1>Timers</h1>
      <TimerDashBoard/>
    </div>
  );
}

export default App;
