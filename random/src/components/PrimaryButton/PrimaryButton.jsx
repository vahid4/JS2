import React from "react";
import styled from "styled-components";

const PrimaryButton = styled.button`
  border: 2px solid
    ${(props) => (props.borderColor ? props.borderColor : "red")};
  color: ${(props) => (props.primary ? "pink" : "darkblue")};
  background-color: ${(props) => (props.primary ? "white" : "pink")};
  padding: ${(props) => (props.padding ? props.padding : 20)}px;
  opacity: ${(props) => (props.opacity ? props.opacity : 1)};
`;

export default PrimaryButton;
