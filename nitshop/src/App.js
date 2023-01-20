import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import StyledButton from "./components/styledButton/StyledButton";
import StyledHeader from "./components/styledButton/StyledHeader";

function App() {
  const [innerText, setInnerText] = useState("");
  const [clicked, setClicked] = useState(false);
  //nesto
  useEffect(() => {
    clicked ? setInnerText("Clicked") : setInnerText("Click me");
  }, [clicked]);

  function buttonClick() {
    setClicked(!clicked);
  }

  return (
    <div className="App">
      <StyledHeader innerText="THISSSS ISSSSS HEADDDDDDEEEERRRRRR" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <StyledButton innerText={innerText} onClickHandler={buttonClick} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          nestooooooooooooooooooooooo
        </a>
      </header>
    </div>
  );
}

export default App;
