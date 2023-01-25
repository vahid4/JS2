import React from "react";
import StyledInput from "../StyledInput/StyledInput";
import StyledButton from "../styledButton/StyledButton";
import { useState, useEffect } from "react";
import "./StyledForm.css";

function StyledForm(props) {
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
    //console.log(inputValue);
  }

  const [addTask, setAddTask] = useState("");

  return (
    <div>
      <label>Write task</label>
      <StyledInput onChangeHandler={onChangeFunction} value={inputValue} />
      {/* <StyledButton innerText={innerText} onClickHandler={buttonClick} /> */}
      <StyledButton
        onClickHandler={() => props.sendData(inputValue)}
        innerText="Create task"
      />
      <div>
        <h2>{inputValue}</h2>
        <button>Delete task</button>
      </div>
    </div>
  );
}

export default StyledForm;
