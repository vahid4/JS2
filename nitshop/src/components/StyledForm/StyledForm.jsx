import React from "react";
import StyledInput from "../StyledInput/StyledInput";
import StyledButton from "../styledButton/StyledButton";
import { useState, useEffect } from "react";
import "./StyledForm.css";

function StyledForm() {
  const [innerText, setInnerText] = useState("");
  const [clicked, setClicked] = useState(false);
  const [inputValue, setInputValue] = useState();

  useEffect(() => {
    clicked ? setInnerText("Clicked") : setInnerText("Click me");
  }, [clicked]);

  function buttonClick() {
    setClicked(!clicked);
  }
  //nesto
  function onChangeFunction(e) {
    setInputValue(e.target.value);
    console.log(inputValue);
  }
  return (
    <form>
      <label>Username</label>
      <StyledInput onChangeHandler={onChangeFunction} value={inputValue} />
      <StyledButton innerText={innerText} onClickHandler={buttonClick} />
    </form>
  );
}

export default StyledForm;
