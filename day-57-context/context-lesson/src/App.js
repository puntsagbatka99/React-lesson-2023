
import './App.css';
import Heading from './component/Heading';
import Layout from './component/Layout';
import Section from './component/Section';
import { UserProvider } from "./contexts/UserContext";

function App() {
  const userName = "Puntsag"
  return (
    <div className="App">
      <h1>DAY-57 React Context</h1>

      <Section level={1}>
        <Heading >Title</Heading>
        <Section level={2}>
          <Heading>Heading</Heading>
          <Heading >Heading</Heading>
          <Heading>Heading</Heading>
          <Section level={3}>
            <Heading >Sub-Heading</Heading>
            <Heading >Sub-Heading</Heading>
            <Heading >Sub-Heading</Heading>
            <Section level={4}>
              <Heading >Sub-Sub-Heading</Heading>
              <Heading >Sub-Sub-Heading</Heading>
              <Heading >Sub-Sub-Heading</Heading>
            </Section>
          </Section>
        </Section>
      </Section>
      {/* <UserProvider> */}
        {/* <Layout/> */}
      {/* </UserProvider> */}
    </div>
  );
}

export default App;
