import React from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import { Grid } from "@mui/material";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import article1 from "../../assets/images/home/product1.jpg";
import article2 from "../../assets/images/home/product2.jpg";
import article3 from "../../assets/images/home/product3.jpg";

const ArticlesHomePage = () => {
  //Postaviti funkcije koje ce izlistavati artikle

  const lorem =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";

  const articles = [
    {
      title: "Article 1",
      description: lorem,
      image: article1,
      price: "25$",
    },
    {
      title: "Patike",
      description: lorem,
      image: article2,
      price: "99.99$",
    },
    {
      title: "Jakna",
      description: lorem,
      image: article3,
      price: "121$",
    },
    {
      title: "Baletanke",
      description: lorem,
      image: article1,
      price: "17$",
    },
    {
      title: "Kapa",
      description: lorem,
      image: article2,
      price: "6$",
    },
    {
      title: "Duks",
      description: lorem,
      image: article3,
      price: "22$",
    },
  ];

  return (
    <SimplifiedDiv style={{}}>
      <Grid container direction="row" spacing={3}>
        {articles.map((article) => {
          <Grid item md={4} lg={4}>
            <ArticleCard
              title={article.title}
              description={article.description}
              image={article.image}
              price={article.price}
            />
          </Grid>;
        })}
      </Grid>
    </SimplifiedDiv>
  );
};

export default ArticlesHomePage;
