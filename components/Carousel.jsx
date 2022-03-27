import Head from "next/head";
import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToScroll: 1,
      className: "center",
      centerMode: true,
      autoplay: true,
      slidesToShow: 3,
      arrows: 0,
    };
    return (
      <div className="mt-8 mb-8">
        <Head>
          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Head>
        <Slider {...settings}>
          {[1, 2, 3, 4, 5].map((item) => (
            <div className="overflow-hidden">
              <div className="mx-3 h-60 w-full flex  items-center">
                <img
                  src="https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  className="h-max w-full "
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
