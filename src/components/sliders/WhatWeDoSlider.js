import React from "react";
import Slider from "react-slick";

// style sheets
import animateStyles from "../../stylesheets/animate.scss";
import creativeStyles from "../../stylesheets/creative.scss";
import structureStyles from "../../stylesheets/structure.scss";
import "slick-carousel/slick/slick-theme.scss";
import "slick-carousel/slick/slick.scss";

// images
import productPlanning from "../../img/productPlanning-w.png";
import productDesigning from "../../img/productDesigning-w.png";
import productDevelopment from "../../img/productDevelopment-w.png";
import productStrategy from "../../img/productStrategy-w.png";

class WhatWeDoSlider extends React.Component {
  constructor() {
    super();
    this.state = {
      state: undefined
    };
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "20px",
      adaptiveHeight: true,
      focusOnSelect: false
    };
    return (
      <Slider {...settings}>
        <div className="wdPer100 floatLeft">
          <div className="">
            <img className="displayBlock ma mb2" src={productPlanning} />
            <h4 className="alignCenter mb1 colorWhite">Product Planning</h4>
            <p className="medium alignCenter wdPer65 ma colorWhite">
              All great ideas need to be nurtured. Early collaboration, feature
              planning, and research help transform napkin sketches into
              powerful ideas.
            </p>
          </div>
        </div>
        <div className="wdPer100 floatLeft">
          <div className="">
            <img className="displayBlock ma mb2" src={productDesigning} />
            <h4 className="alignCenter colorWhite mb1">UI/UX Designing</h4>
            <p className="medium alignCenter wdPer65 ma colorWhite">
              We create interfaces for humans. We diagnose and understand the UX
              challenges and overcome them with delightful and intuitive
              designs.
            </p>
          </div>
        </div>
        <div className="wdPer100 floatLeft">
          <div className="">
            <img className="displayBlock ma mb2" src={productDevelopment} />
            <h4 className="alignCenter mb1 colorWhite">Development</h4>
            <p className="medium alignCenter wdPer65 ma colorWhite">
              We love bringing our concepts to life, whether its on the web,
              desktop, mobile, or all three, using cutting edge technologies and
              platforms
            </p>
          </div>
        </div>
        <div className="wdPer100 floatLeft">
          <div className="">
            <img className="displayBlock ma mb2" src={productStrategy} />
            <h4 className="alignCenter mb1 colorWhite">
              Product Launch Strategy
            </h4>
            <p className="medium alignCenter wdPer65 ma colorWhite">
              We not only build products, we build brands. We own your ideas and
              make sure we convey them to your audience properly
            </p>
          </div>
        </div>
      </Slider>
    );
  }
}

export default WhatWeDoSlider;
