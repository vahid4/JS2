import React from "react";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import { colors } from "../../util/theme";
import { Grid } from "@mui/material";

const FooterLinkBar = () => {
  const styles = {
    mainHolder: {
      backgroundColor: colors.secondColor,
    },
  };

  return (
    <SimplifiedDiv>
      <Grid container direction="row">
        <Grid item md={2} lg={2}>
          <SimplifiedDiv>
            <Text>Nesto</Text>
          </SimplifiedDiv>
        </Grid>
        <Grid item md={2} lg={2}>
          <SimplifiedDiv>
            <Text>Nesto</Text>
          </SimplifiedDiv>
        </Grid>
        <Grid item md={2} lg={2}>
          <SimplifiedDiv>
            <Text>Nesto</Text>
          </SimplifiedDiv>
        </Grid>
        <Grid item md={2} lg={2}>
          <SimplifiedDiv>
            <Text>Nesto</Text>
          </SimplifiedDiv>
        </Grid>
        <Grid item md={2} lg={2}>
          <SimplifiedDiv>
            <Text>Nesto</Text>
          </SimplifiedDiv>
        </Grid>
      </Grid>
    </SimplifiedDiv>
  );
};

export default FooterLinkBar;
