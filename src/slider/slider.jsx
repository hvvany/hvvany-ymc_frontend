import React, { Component } from "react";
import Slider from "react-slick";
// import style from "./slider.module.css";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const stores = this.props.stores;
    return (
      <div>
        {stores ? (
          <>
            {stores.map((data, idx) => {
              const name = data.name;
              const items = data.items;
              return (
                <Slider {...settings}>
                  <span>{name}</span>
                  <span>{items ? items : "없다"}</span>
                </Slider>
              );
            })}
          </>
        ) : null}
      </div>
    );
  }
}
