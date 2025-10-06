import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type sliderProps = {
  pictures: string[];
};

function Slider({ pictures }: sliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIdex) =>
      prevIdex === 0 ? pictures.length - 1 : prevIdex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="slider-container">
        <div className="arrow-L" onClick={handlePrev}>
          <FontAwesomeIcon icon={faChevronLeft} className="icon-chevron" />
        </div>
        <img
          src={pictures[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slider__image"
        />

        <div className="arrow-R" onClick={handleNext}>
          <FontAwesomeIcon icon={faChevronRight} className="icon-chevron" />
        </div>
      </div>
    </>
  );
}
export default Slider;
