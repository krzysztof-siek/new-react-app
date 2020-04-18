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
    className: "center",
      centerMode: true,
      slidesToShow: 1,
      speed: 500
    };

    return (
      <div>
        <Slider {...settings}>
            {this.props.el.list.map(el => <SliderItem el={el}/> )}
        </Slider>
      </div>
    );
  }
}