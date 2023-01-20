import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import StyledButton from "./components/styledButton/StyledButton";
import StyledHeader from "./components/styledButton/StyledHeader";
import StyledInput from "./components/StyledInput/StyledInput";
import StyledForm from "./components/StyledForm/StyledForm";

function App() {
  return (
    <div className="App">
      <StyledHeader innerText="THISSSS ISSSSS HEADDDDDDEEEERRRRRR" />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <StyledForm />
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
