import React from "react";
import Text from "../../components/Text/Text";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import { Card } from "@mui/material";
import { colors, fontSize } from "../../util/theme";

const ArticleCard = ({ title, description, image, price, onShowMore }) => {
  const styles = {
    imageContainer: {
      width: "100%",
      height: "200px",
    },
    image: {
      objectFit: "contain",
      width: "100%",
      height: "100%",
    },
    descriptionContainer: {
      textAlign: "center",
      display: "grid",
      placeItems: "center",
      gap: 8,
      margin: "10px 15px",
    },
    buttonHolder: {
      display: "flex",
      justifyContent: "center",
    },
  };

  const altTag = title !== "" ? title : "Article image";

  return (
    <Card>
      <SimplifiedDiv style={styles.imageContainer}>
        <img src={image} style={styles.image} alt={altTag} />
      </SimplifiedDiv>
      <SimplifiedDiv style={styles.descriptionContainer}>
        <Text color={colors.accentColor} fontSize={fontSize.large}>
          {price}
        </Text>
        <Text fontSize={fontSize.medium}>{title}</Text>
        <Text color={colors.lightBlack} fontSize={fontSize.optimal}>
          {description}
        </Text>
      </SimplifiedDiv>
      <SimplifiedDiv style={styles.buttonHolder}>
        <PrimaryButton
          primary
          borderRadius="3px"
          padding={10}
          onClick={onShowMore}
        >
          Show more
        </PrimaryButton>
      </SimplifiedDiv>
    </Card>
  );
};

export default ArticleCard;
