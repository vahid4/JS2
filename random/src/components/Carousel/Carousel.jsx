import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as SliderCarousel } from "react-responsive-carousel";
import Text from "../Text/Text";
import { fontSize } from "../../util/theme";

const Carousel = ({ data }) => {
  return (
    <SliderCarousel
      width="100%"
      axis="horizontal"
      showIndicators
      showThumbs={false}
      interval={3000}
      autoPlay
    >
      {data.map((d) => (
        <div key={d} style={{ height: "400px" }}>
          <img
            src={d.imgSrc}
            style={{ height: "100%", objectFit: "contain" }}
          />
          <Text className="legend" fontSize={fontSize.xLarge}>
            {d.imgText}
          </Text>
        </div>
      ))}
    </SliderCarousel>
  );
};

export default Carousel;
