import React from "react";
import Grid from "@mui/material/Grid";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import { colors } from "../../util/theme";
import PhoneIcon from "@mui/icons-material/Phone";
import { fontSize, fontStyle } from "@mui/system";

const TopRow = () => {
  return (
    <CustomDiv
      bgColor={colors.secondColor}
      width="100%"
      height="30px"
      padding="0px 5%"
      border="0px"
    >
      <Grid container direction="row">
        <Grid item lg={6} spacing={0}>
          <CustomDiv width="50%" display="flex" alignItems="center">
            <PhoneIcon style={{ fontSize: fontSize.normal }} />
            <p>+381669754145</p>
          </CustomDiv>
          <CustomDiv width="50%" display="flex" alignItems="center"></CustomDiv>
        </Grid>
      </Grid>
    </CustomDiv>
  );
};

export default TopRow;
