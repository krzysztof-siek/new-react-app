import React, { Component } from "react";
import Slider from "react-slick";
import "./slider.scss";
import SliderItem from "./SliderItem";



export default class SimpleSlider extends Component {
  render() {
    const settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1
    className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };

    let text = ["slider jeden", "slider dwa zajebiście", "slider trzy", "cztery" ," pięć"];
    console.log(this.props.el.list)
    // let list = this.props.el.list.map(el => el.id)
    return (
      <div>
        <Slider {...settings}>
            {/* {text.map(el => <SliderItem el={el}/>)} */}
            {this.props.el.list.map(el => <SliderItem el={el}/> )}
        </Slider>
      </div>
    );
  }
}