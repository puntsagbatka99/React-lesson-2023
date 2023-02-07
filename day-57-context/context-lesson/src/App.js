
import './App.css';
import Layout from './component/Layout';
import { UserProvider } from "./contexts/UserContext";

function App() {
  const userName = "Puntsag"
  return (
    <div className="App">
      <h1>DAY-57 React Context</h1>
      <UserProvider>
        <Layout/>
      </UserProvider>
    </div>
  );
}

export default App;
