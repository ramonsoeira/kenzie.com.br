import React from "react";
import Slick from "react-slick";
import "@styles/slider.scss";

const defaultOptions = {
  infinite: false,
  arrows: false,
  dots: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const Slider = ({ children, options }) => {
  const mergeOptions = { ...defaultOptions, ...options };

  return (
    <div className="kz-slider">
      <Slick {...mergeOptions}>{children}</Slick>
    </div>
  );
};

export default Slider;
