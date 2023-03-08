import React from "react";
import Text from "../../components/Text/Text";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import { colors } from "../../util/theme";
import AddIcon from "@mui/icons-material/Add";

const categories = [
  {
    name: "Sportswear",
    active: false,
  },
  {
    name: "Mens",
    active: false,
  },
  {
    name: "Womens",
    active: false,
  },
  {
    name: "Kids",
    active: false,
  },
  {
    name: "Fashion",
    active: false,
  },
  {
    name: "Households",
    active: false,
  },
  {
    name: "Interiors",
    active: false,
  },
  {
    name: "Clothing",
    active: false,
  },
  {
    name: "Bags",
    active: false,
  },
  {
    name: "Shoes",
    active: false,
  },
];

const subCategory = [
  {
    categoryName: "Sportswear",
    name: "Adidas",
    active: false,
  },
  {
    categoryName: "Sportswear",
    name: "Nike",
    active: false,
  },
  {
    categoryName: "Sportswear",
    name: "Puma",
    active: false,
  },
  {
    categoryName: "Sportswear",
    name: "UnderArmour",
    active: false,
  },

  {
    categoryName: "Mens",
    name: "Adidas",
    active: false,
  },
  {
    categoryName: "Mens",
    name: "Nikee",
    active: false,
  },
];

const CategoryTab = () => {
  const styles = {
    container: {
      borderWidth: "0.5px",
      borderColor: colors.lightGray,
      borderRadius: "5px",
      textAlign: "left",
    },
  };

  return <SimplifiedDiv style={styles.container}></SimplifiedDiv>;
};

export default CategoryTab;
