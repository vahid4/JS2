import React from "react";
import StyledInput from "../StyledInput/StyledInput";
import StyledButton from "../styledButton/StyledButton";
function StyledForm() {
  return (
    <form>
      <label>Username</label>
      <StyledInput />
      <StyledButton />
    </form>
  );
}

export default StyledForm;
