import React from "react";
import Slider from "react-slick";
import TopCategoriesCard from "./TopCategoriesCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopCategoriesSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "max-w-[1383px] max-h-[386px] flex flex-row"
  };
  return (
    <div className=" max-w-[1383px] max-h-[386px] mt-14">
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
