import React from "react";
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
