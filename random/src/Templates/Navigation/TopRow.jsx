import React from "react";
import Grid from "@mui/material/Grid";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import { colors } from "../../util/theme";
import PhoneIcon from "@mui/icons-material/Phone";

const TopRow = () => {
  return (
    <Grid container direction="row">
      <CustomDiv
        bgColor={colors.secondColor}
        width="100%"
        height="30px"
        padding="0px 5%"
        border="0px"
      >
        <PhoneIcon />
        <p>+381669754145</p>
      </CustomDiv>
    </Grid>
  );
};

export default TopRow;
