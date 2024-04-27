import React from "react";
import Slider from "react-slick";
import TopCategoriesCard from "./TopCategoriesCard";

const TopCategoriesSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className="flex bg-blue-500">
      <Slider {...settings}>
        <TopCategoriesCard text="Art"/>
        <TopCategoriesCard text="Collectables"/>
        <TopCategoriesCard text="Rare"/>
        <TopCategoriesCard text="New"/>
        <TopCategoriesCard text="Popular"/>
        <TopCategoriesCard text="Own"/>
      </Slider>
    </div>
  );
}

export default TopCategoriesSlider;
