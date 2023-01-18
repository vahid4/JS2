import React from "react";
import "./styledButton.css";

const StyledButton = (props) => {
  var ButtonText = "Click me";

  return (
    <button className="styledButton" onClick={props.onClickHandler}>
      {props.innerText}
    </button>
  );
};

export default StyledButton;
