import React from "react";
import { Grid } from "@mui/material";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import Text from "../../components/Text/Text";
import CategoryTab from "../CategoryTab/CategoryTab";
import { colors, fontSize } from "../../util/theme";

const styles = {
  container: {
    padding: "0px 10%",
  },
  headingContainer: {
    width: "100%",
    textAling: "center",
  },
  headingText: {
    fontSize: fontSize.medium,
    color: colors.accentColor,
  },
};

const ProductsHomePage = () => {
  return (
    <SimplifiedDiv style={styles.container}>
      <Grid container direction="row">
        <Grid item md={3} lg={3}>
          <SimplifiedDiv style={styles.headingContainer}>
            <Text style={styles.headingText}>Category</Text>
          </SimplifiedDiv>
          <CategoryTab />
        </Grid>
        <Grid item md={9} lg={9}>
          <SimplifiedDiv style={styles.headingContainer}>
            <Text style={styles.headingText}>Articles</Text>
          </SimplifiedDiv>
        </Grid>
      </Grid>
    </SimplifiedDiv>
  );
};

export default ProductsHomePage;
