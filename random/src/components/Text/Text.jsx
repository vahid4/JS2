import React from "react";
import styled from "styled-components";

const Text = styled.p`
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "300")};
  font-style: ${(props) => (props.fontStyle ? props.fontStyle : "inherit")};
  text-decoration: ${(props) =>
    props.textDecoration ? props.textDecoration : "none"};
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : "3px"};
`;

export default Text;
