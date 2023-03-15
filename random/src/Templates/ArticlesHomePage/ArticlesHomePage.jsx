import React from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import { Grid } from "@mui/material";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import article1 from "../../assets/images/home/product1.jpg";
import article2 from "../../assets/images/home/product2.jpg";
import article3 from "../../assets/images/home/product3.jpg";

const ArticlesHomePage = () => {
  //Postaviti funkcije koje ce izlistavati artikle

  const articles = [
    {
      title: "Article 1",
      description: "",
      image: article1,
      price: "25$",
      onShowMore: () => {
        return;
      },
    },
    {
      title: "Patike",
      description: "",
      image: article2,
      price: "99.99$",
      onShowMore: () => {
        return;
      },
    },
    {
      title: "Jakna",
      description: "",
      image: article3,
      price: "121$",
      onShowMore: () => {
        return;
      },
    },
    {
      title: "Baletanke",
      description: "",
      image: article1,
      price: "17$",
      onShowMore: () => {
        return;
      },
    },
    {
      title: "Kapa",
      description: "",
      image: article2,
      price: "6$",
      onShowMore: () => {
        return;
      },
    },
    {
      title: "Duks",
      description: "",
      image: article3,
      price: "22$",
      onShowMore: () => {
        return;
      },
    },
  ];

  return (
    <SimplifiedDiv style={{}}>
      <Grid container direction="row" spacing={3}>
        <Grid item md={4} lg={4}>
          <ArticleCard />
        </Grid>
        <Grid item md={4} lg={4}>
          <ArticleCard />
        </Grid>
        <Grid item md={4} lg={4}>
          <ArticleCard />
        </Grid>
        <Grid item md={4} lg={4}>
          <ArticleCard />
        </Grid>
        <Grid item md={4} lg={4}>
          <ArticleCard />
        </Grid>
        <Grid item md={4} lg={4}>
          <ArticleCard />
        </Grid>
      </Grid>
    </SimplifiedDiv>
  );
};

export default ArticlesHomePage;
