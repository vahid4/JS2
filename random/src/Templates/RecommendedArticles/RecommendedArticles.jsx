import React from "react";
import article1 from "../../assets/images/home/product1.jpg";
import article2 from "../../assets/images/home/product2.jpg";
import article3 from "../../assets/images/home/product3.jpg";
import { Grid } from "@mui/material";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import Carousel from "../../components/Carousel/Carousel";
import ArticleCard from "../ArticleCard/ArticleCard";
import { articles } from "../ArticlesHomePage/ArticlesHomePage";

const styles = {
  articleCardHolder: {
    padding: 20,
  },
};
const RecommendedArticles = () => {
  return (
    <SimplifiedDiv>
      <Carousel
        showIndicators={false}
        showStatus={false}
        infiniteLoop
        interval={1000}
        swipeable
        centerMode
        centerSlidePercentage={33}
      >
        {articles.map((article, index) => {
          return (
            <SimplifiedDiv style={styles.articleCardHolder}>
              <ArticleCard
                key={index}
                title={article.title}
                image={article.image}
                description={article.description}
                price={article.price}
              />
            </SimplifiedDiv>
          );
        })}
      </Carousel>
    </SimplifiedDiv>
  );
};

export default RecommendedArticles;
