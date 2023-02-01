import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter/Counter";
import CustomDiv from "./components/CustomDiv/CustomDiv";
import { Children } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        {/* <CustomDiv>
          <h2>Neki naslov mnogo dobar</h2>
        </CustomDiv> */}
      </header>
    </div>
  );
}

export default App;
