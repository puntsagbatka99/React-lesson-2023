import './App.css';
import Body from './components/Body';
import ChangeTheme from './components/ChangeTheme';
import Footer from './components/Footer';
import Header from './components/Header';
import TimersDashboard from "./components/TimersDashboard";
import { TimerContextProvider } from './context/TimerContext';

export default function App() {
  return (
    <div className='App'>
      <h1>DAY-61 CUSTOM-HOOK</h1>
      <ChangeTheme/>
      <Header/>
      <Body/>
      <Footer/>
      {/* <h1>Timer App</h1>
      <TimerContextProvider>
        <TimersDashboard />
      </TimerContextProvider> */}
    </div>
  );
}