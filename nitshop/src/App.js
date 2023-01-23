import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import StyledButton from "./components/styledButton/StyledButton";
import StyledHeader from "./components/styledButton/StyledHeader";
import StyledInput from "./components/StyledInput/StyledInput";
import StyledForm from "./components/StyledForm/StyledForm";
import StyledDiv from "./components/StyledDiv/StyledDiv";

function App() {
  return (
    <div className="App">
      <StyledHeader innerText="THISSSS ISSSSS HEADDDDDDEEEERRRRRR" />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <StyledDiv />
        <StyledForm />
      </header>
    </div>
  );
}

export default App;
