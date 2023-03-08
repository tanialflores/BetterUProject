import React, { Component } from "react";
import Slider from "react-slick";

import leftArrowBlack from  "../../../assets/icons/leftArrowBlack.svg"
import rightArrowBlack from  "../../../assets/icons/rightArrowBlack.svg"
import "./CarouselSlick.scss"

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={rightArrowBlack}
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={leftArrowBlack}
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

export default function({mappedItems}) {
  const settings = {
    dots: true,
    infinite: true,
    focusOnSelect: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return(
    <div className="CarouselSlick">
      <Slider {...settings} >
        {mappedItems}
      </Slider>
    </div>
  )
}