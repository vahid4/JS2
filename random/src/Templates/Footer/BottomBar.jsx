import React from "react";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import { colors } from "../../util/theme";
import Text from "../../components/Text/Text";

const BottomBar = () => {
  const styles = {
    mainDiv: {
      backgroundColor: colors.lightGray,
      width: "100%",
      height: "30px",
      display: "flex",
      justifyContent: "space-between",
      padding: "5px 10%",
    },
  };
  return (
    <SimplifiedDiv style={styles.mainDiv}>
      <Text>Copyright Vahid Gasanin</Text>
      <Text>Made by Vahid Gasanin</Text>
    </SimplifiedDiv>
  );
};

export default BottomBar;
