import React from "react";
import ReactDOM from "react-dom";
import Header from "./shared/header.js";
import handleViewport from "react-in-viewport";
import MediaQuery from "react-responsive";
import ClientTestimonials from "./sliders/TestimonialsSlider";
import WhatWeDoSlider from "./sliders/WhatWeDoSlider";

// style sheets
import aboutStyles from "../stylesheets/about.scss";
import animateStyles from "../stylesheets/animate.scss";
import creativeStyles from "../stylesheets/creative.scss";
import structureStyles from "../stylesheets/structure.scss";

class AboutUsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      state: undefined,
      ourSpeciality: undefined,
    };
  }

  renderOurSpeciality() {
    const Block = (props: { inViewport: boolean }) => {
      const { inViewport, innerRef } = props;
      const elemClass =
        inViewport && !this.state.ourSpeciality
          ? "wdPer25 floatLeft animated animationDelay fadeInLeft"
          : "wdPer25 floatLeft";
      return (
        <div className="viewport-block" ref={innerRef}>
          <div className="wdPer100 overFlowHidden mt10 mb8 resGrid">
            <div className={elemClass}>
              <div className="mr2">
                <h1 className="alignCenter primaryGradientText displayBlock">
                  30
                </h1>
                <h4 className="alignCenter mb1">Products Launched</h4>
                <p className="medium alignCenter">
                  Planned, designed and developed 30 groud breaking products
                  till date
                </p>
              </div>
            </div>
            <div className={elemClass}>
              <div className="ml2 mr2">
                <h1 className="alignCenter primaryGradientText displayBlock">
                  40
                </h1>
                <h4 className="alignCenter mb1">Clients</h4>
                <p className="medium alignCenter">
                  Served 40 individual and enterprise clients till date
                </p>
              </div>
            </div>
            <div className={elemClass}>
              <div className="ml2 mr2">
                <h1 className="alignCenter primaryGradientText displayBlock">
                  15
                </h1>
                <h4 className="alignCenter mb1">Countries</h4>
                <p className="medium alignCenter">
                  Worked with talent and clients from 15 different countries{" "}
                </p>
              </div>
            </div>
            <div className={elemClass}>
              <div className="ml2">
                <h1 className="alignCenter primaryGradientText displayBlock">
                  8
                </h1>
                <h4 className="alignCenter mb1">Years</h4>
                <p className="medium alignCenter">
                  Serving our clients for over 8 years now
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    };

    const ViewportBlock = handleViewport(Block /** options: {}, config: {} **/);
    return (
      <section className="ourJob overFlowHidden">
        <div className="container">
          <ViewportBlock
            onEnterViewport={() => undefined}
            onLeaveViewport={() => {
              this.setState((ourSpeciality: true));
            }}
          />
        </div>
      </section>
    );
  }

  renderWhatWeDo() {
    return (
      <section className="relative mb8">
        <div className="container overFlowHidden">
          <h2 className="alignCenter mb5">What we are good at</h2>
        </div>
        <div className="aboutUsBanner relative overFlowHidden">
          <div className="container whatWeDo ma mt7 mb7">
            <WhatWeDoSlider />
          </div>
        </div>
      </section>
    );
  }

  renderTestimonials() {
    return (
      <section className="mb8">
        <div className="container overFlowHidden">
          <h2 className="alignCenter mb5">
            See what people are saying about us
          </h2>
          <div className="slickSliderTestimonials">
            <ClientTestimonials />
          </div>
        </div>
      </section>
    );
  }

  

  render() {
    return (
      <React.Fragment>
        <section
          style={{ height: "100%" }}
          className="background overFlowHidden purpose"
        >
          <div className="container overFlowHidden">
            <Header aboutClass="colorOrange" />
            <h1 className="displayBlock mt3">
              We build software products that are <br />{" "}
              <span className="primaryGradientText">simple</span>,{" "}
              <span className="primaryGradientText">beautiful</span> and{" "}
              <span className="primaryGradientText">easy to use.</span>
            </h1>
            <div className="scrollDown">
              <svg
                width="30px"
                height="100%"
                viewBox="0 0 247 390"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: "1.5",
                }}
              >
                <path
                  id="wheel"
                  d="M123.359,79.775l0,72.843"
                  style={{
                    fill: "none",
                    stroke: "#ff6700",
                    strokeWidth: "20px",
                  }}
                />
                <path
                  id="mouse"
                  d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                  style={{
                    fill: "none",
                    stroke: "#ff6700",
                    strokeWidth: "20px",
                  }}
                />
              </svg>
            </div>
          </div>
        </section>
        {this.renderOurSpeciality()}
        {this.renderWhatWeDo()}
        {this.renderTestimonials()}
      </React.Fragment>
    );
  }
}

export default AboutUsPage;
