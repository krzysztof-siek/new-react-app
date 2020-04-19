import React, { Component } from "react";
import Slider from "react-slick";
import "../../scss/variables.scss";
import "./slider.scss";
import SliderItem from "./SliderItem";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToScroll: 1,
    //   className: "center",
      centerMode: true,
      slidesToShow: 1,
      speed: 500
    };
    const {moviesList} = this.props;
    return (
      <div className="slider">
        <Slider {...settings}>
            {moviesList.map(movie => <SliderItem key={movie.id} movie={movie}/> )}
        </Slider>
      </div>
    );
  }
}