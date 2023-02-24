import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as SliderCarousel } from "react-responsive-carousel";

const Carousel = ({ data }) => {
  return (
    <SliderCarousel>
      <div>
        <img src="assets/1.jpeg" />
        <p className="legend">Legend 1</p>
      </div>
    </SliderCarousel>
  );
};

export default Carousel;
