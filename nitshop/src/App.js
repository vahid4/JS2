import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import StyledButton from "./components/styledButton/StyledButton";
import StyledHeader from "./components/styledButton/StyledHeader";
import StyledInput from "./components/StyledInput/StyledInput";
import StyledForm from "./components/StyledForm/StyledForm";
import StyledDiv from "./components/StyledDiv/StyledDiv";

function App() {
  const [fullname, setFullName] = useState("");
  function dataGrabber(inputValue) {
    let fullname = inputValue;
    console.log(fullname);
    setFullName(fullname);
  }

  return (
    <div className="App">
      <StyledHeader innerText="THISSSS ISSSSS HEADDDDDDEEEERRRRRR" />
      {/* <header className="App-header"></header> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <StyledDiv>
        <h2>{fullname}</h2>
      </StyledDiv>
      <StyledForm sendData={(inputValue) => dataGrabber(inputValue)} />
    </div>
  );
}

export default App;
