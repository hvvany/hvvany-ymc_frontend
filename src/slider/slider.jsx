import React, { Component } from "react";
import Slider from "react-slick";
import style from "./slider.module.css";

// import style from "./slider.module.css";
export default class SimpleSlider extends Component {
  render() {
    const dotCheck = this.props.dotscheck;
    const settings = {
      dots: (dotCheck ? true : false),
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
          <Slider {...settings}>
            {stores.map((data, idx) => {
              const name = data.name;
              const items = data.items;
              return (
                  <div className={style.card}>
                    <span>{name}</span>
                    <span>{items ? items : "없다"}</span>
                  </div>
              );
            })}
            </Slider>
          </>
        ) : null}
      </div>
    );
  }
}
