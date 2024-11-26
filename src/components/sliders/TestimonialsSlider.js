import React from "react";
import Slider from "react-slick";

// style sheets
import animateStyles from "../../stylesheets/animate.scss";
import creativeStyles from "../../stylesheets/creative.scss";
import structureStyles from "../../stylesheets/structure.scss";
import "slick-carousel/slick/slick-theme.scss";
import "slick-carousel/slick/slick.scss";

// images
import client from "../../img/clients/john.png";

class ClientTestimonials extends React.Component {
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
      adaptiveHeight: true
      // dots: true,
      // focusOnSelect: false,
      //
      //
      // slidesToShow: 1,
      // arrows: true,
    };
    return (
      <Slider {...settings}>
        <div className="mb6">
          <p className="wdPer65 ma alignCenter">
            They are great! They can help with design as well as react
            development. They communicate well and always pushe quality code. If
            you need someone who will understand the product and help you
            improve it, he is your guy!
          </p>
          <img className="ma displayBlock mt3" src={client} />
          <h4 className="wdPer50 ma alignCenter mt1">John Anderson</h4>
          <p className="wdPer50 ma alignCenter">CEO at EventRay</p>
        </div>
      </Slider>
    );
  }
}

export default ClientTestimonials;
