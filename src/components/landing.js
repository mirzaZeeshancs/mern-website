import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Header from "./shared/header";
import handleViewport from "react-in-viewport";
import MediaQuery from "react-responsive";
import scrollToComponent from "react-scroll-to-component";

// images
import productPlanning from "../img/productPlanning.png";
import productDesigning from "../img/productDesigning.png";
import productDevelopment from "../img/productDevelopment.png";
import productStrategy from "../img/productStrategy.png";
import portfolioProject1 from "../img/portfolioProject1.png";
import portfolioProject2 from "../img/portfolioProject2.png";
import portfolioProject3 from "../img/portfolioProject3.png";
import portfolioProject4 from "../img/portfolioProject4.png";
import portfolioProject5 from "../img/portfolioProject5.png";
import portfolioProject7 from "../img/portfolioProject7.png";
import client1 from "../img/portfolioCompany1.png";
import client2 from "../img/portfolioCompany2.png";
import client3 from "../img/portfolioCompany3.png";
import client4 from "../img/portfolioCompany4.png";
import client5 from "../img/portfolioCompany5.png";
import client6 from "../img/portfolioCompany6.png";

// style sheets
import animateStyles from "../stylesheets/animate.scss";
import creativeStyles from "../stylesheets/creative.scss";
import structureStyles from "../stylesheets/structure.scss";

class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      portfolioSelectorClass: "first",
      whatWeDoAnimated: false,
      whatWeHaveDoneAnimated: false
    };
  }

  componentDidMount() {}

  renderWhatWeDo() {
    const Block = (props: { inViewport: boolean }) => {
      const { inViewport, innerRef } = props;
      const elemClass =
        inViewport && !this.state.whatWeDoAnimated
          ? "wdPer25 floatLeft animated animationDelay fadeInLeft"
          : "wdPer25 floatLeft";
      return (
        <div className="viewport-block" ref={innerRef}>
          <div className={elemClass}>
            <div className="mr2">
              <img className="displayBlock ma mb2" src={productPlanning} />
              <h4 className="alignCenter mb1">Product Planning</h4>
              <p className="medium alignCenter">
                All great ideas need to be nurtured. Early collaboration,
                feature planning, and research help transform napkin sketches
                into powerful ideas.
              </p>
            </div>
          </div>
          <div className={elemClass}>
            <div className="ml2 mr2">
              <img className="displayBlock ma mb2" src={productDesigning} />
              <h4 className="alignCenter mb1">UI/UX Designing</h4>
              <p className="medium alignCenter">
                We create interfaces for humans. We diagnose and understand the
                UX challenges and overcome them with delightful and intuitive
                designs.
              </p>
            </div>
          </div>
          <div className={elemClass}>
            <div className="ml2 mr2">
              <img className="displayBlock ma mb2" src={productDevelopment} />
              <h4 className="alignCenter mb1">Development</h4>
              <p className="medium alignCenter">
                We love bringing our concepts to life, whether its on the web,
                desktop, mobile, or all three, using cutting edge technologies
                and platforms
              </p>
            </div>
          </div>
          <div className={elemClass}>
            <div className="ml2">
              <img className="displayBlock ma mb2" src={productStrategy} />
              <h4 className="alignCenter mb1">Product Launch Strategy</h4>
              <p className="medium alignCenter">
                We not only build products, we build brands. We own your ideas
                and make sure we convey them to your audience properly
              </p>
            </div>
          </div>
        </div>
      );
    };

    const ViewportBlock = handleViewport(Block /** options: {}, config: {} **/);
    return (
      <section ref={this.applyRef}>
        <div className="container">
          <div className="wdPer100 overFlowHidden mt12 mb12 resGrid">
            <ViewportBlock
              onEnterViewport={() => undefined}
              onLeaveViewport={() => {
                this.setState({ whatWeDoAnimated: true });
              }}
            />
          </div>
        </div>
      </section>
    );
  }

  renderWhatWeHaveDone() {
    const BlockWeb = (props: { inViewport: boolean }) => {
      const { inViewport, innerRef } = props;
      const elemClass =
        inViewport && !this.state.whatWeHaveDoneAnimated
          ? "overFlowHidden projRow animated slideInUp"
          : "projRow overFlowHidden";
      return (
        <div className="viewport-block" ref={innerRef}>
          <div className={elemClass}>
            <div className="wdPer100 mt5 mb2 floatLeft resGrid">
              <div className="wdPer45 floatLeft">
                <img className="displayBlock mb2" src={portfolioProject1} />
                <h3 className="mb2 mt3 special-heading">
                  <span>1</span>
                  <span>Eventray</span>
                </h3>
                <p className="medium mr4 lh1-8">
                  EventRay focuses on giving you complete control of your
                  events. Allowing you to see detailed analytics of each and
                  every event
                </p>
                <Link to="/eventray">
                  <button className="primary mt2">View Case Study</button>
                </Link>
              </div>

              <div className="wdPer45 floatRight">
                <img className="displayBlock mb2" src={portfolioProject5} />
                <h3 className="mb2 mt3 special-heading">
                  <span>2</span>
                  <span>JobJiant</span>
                </h3>
                <p className="medium mr4 lh1-8">
                  JobJiant helps you search for best handyman around your area.
                </p>
                <button className="primary mt2">
                  Case Study Coming Soon !
                </button>
              </div>
            </div>
            <div className="wdPer100 mt2 mb2 floatLeft resGrid projRow2">
              <div className="wdPer45 floatLeft">
                <img className="displayBlock mb2" src={portfolioProject3} />
                <h3 className="mb2 mt3 special-heading">
                  <span>3</span>
                  <span>Flag.io</span>
                </h3>
                <p className="medium mr4 lh1-8">
                  Flag.io helps you distribute your local SEO profile to
                  hundreds of search engines & publishers, instantly.
                </p>
                <Link to="/flagio">
                  <button className="primary mt2">View Case Study</button>
                </Link>
              </div>

              <div className="wdPer45 floatRight">
                <img className="displayBlock mb2" src={portfolioProject4} />
                <h3 className="mb2 mt3 special-heading">
                  <span>4</span>
                  <span>Runners Connect</span>
                </h3>
                <p className="medium mr4 lh1-8">
                  Runners Connect helps you learn how to Stay Healthy, Eat Right
                  and Run Faster?
                </p>
                <button className="primary mt2">
                  Case Study Coming Soon !
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    };

    const BlockMobile = (props: { inViewport: boolean }) => {
      const { inViewport, innerRef } = props;
      const elemClass =
        inViewport && !this.state.whatWeHaveDoneAnimated
          ? "overFlowHidden projRow animated slideInUp"
          : "projRow overFlowHidden";
      return (
        <div className="viewport-block" ref={innerRef}>
          <div className={elemClass}>
            <div className="wdPer100 mt5 mb2 floatLeft resGrid">
              <div className="wdPer45 floatLeft">
                <img className="displayBlock mb2" src={portfolioProject7} />
                <h3 className="mb2 mt3 special-heading">
                  <span>1</span>
                  <span>Mozio</span>
                </h3>
                <p className="medium mr4 lh1-8">
                  Mozio concentrates on sorting out the modern world
                  transportation issues.
                </p>
                <button className="primary mt2">
                  Case Study Coming Soon !
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    };

    const ViewportBlockWeb = handleViewport(
      BlockWeb /** options: {}, config: {} **/
    );
    const ViewportBlockMobile = handleViewport(
      BlockMobile /** options: {}, config: {} **/
    );
    return (
      <section
        className="ourWork overFlowHidden"
        ref={section => {
          this.ourWork = section;
        }}
      >
        <div className="container">
          <div className="wdPer100 mt1 mb5 floatLeft">
            <h2 className="alignCenter">What we have been working on</h2>
            <p className="medium alignCenter mt1">
              Have a look at some of our latest work
            </p>
            <div className="mt2 ma portfolioSelector selectorBar">
              <div
                className={"selector " + this.state.portfolioSelectorClass}
              ></div>
              <ul className="overFlowHidden">
                <li
                  className={
                    "wdPer50 floatLeft displayBlock " +
                    (this.state.portfolioSelectorClass === "first"
                      ? "selected"
                      : "")
                  }
                >
                  <span className="alignCenter displayBlock">
                    <a
                      onClick={() => {
                        this.setState({
                          portfolioSelectorClass: "first"
                        });
                      }}
                    >
                      Web Applications
                    </a>
                  </span>
                </li>
                <li
                  className={
                    "wdPer50 floatLeft displayBlock " +
                    (this.state.portfolioSelectorClass === "second"
                      ? "selected"
                      : "")
                  }
                >
                  <span className="alignCenter displayBlock">
                    <a
                      onClick={() => {
                        this.setState({
                          portfolioSelectorClass: "second"
                        });
                      }}
                    >
                      Mobile Applications
                    </a>
                  </span>
                </li>
              </ul>
            </div>
            {this.state.portfolioSelectorClass === "first" ? (
              <ViewportBlockWeb
                onEnterViewport={() => undefined}
                onLeaveViewport={() => {
                  this.setState({ whatWeHaveDoneAnimated: true });
                }}
              />
            ) : (
              <ViewportBlockMobile
                onEnterViewport={() => undefined}
                onLeaveViewport={() => {
                  this.setState({ whatWeHaveDoneAnimated: true });
                }}
              />
            )}
          </div>
        </div>
      </section>
    );
  }

  renderWhoWeWorkFor() {
    return (
      <section className="backgroundF7F7F7 clients">
        <div className="container overFlowHidden">
          <div className="wdPer100 mt6 mb12">
            <h2 className="alignCenter">
              We work for <span className="primaryGradientText">big</span> and{" "}
              <span className="primaryGradientText">small</span>
            </h2>
            <p className="medium alignCenter mt1">
              Some of the companies we have worked with
            </p>
            <MediaQuery minWidth={900}>
              <div className="resDynamic">
                <div className="wdPer100 overFlowHidden mt5 ">
                  <div className="wdPer25 floatLeft">
                    <div className="mr2">
                      <img className="displayBlock ma mb2" src={client1} />
                      <h4 className="alignCenter">WAI</h4>
                      <p className="large alignCenter">Data Analytics</p>
                    </div>
                  </div>
                  <div className="wdPer25 floatLeft">
                    <div className="ml2 mr2">
                      <img className="displayBlock ma mb2" src={client5} />
                      <h4 className="alignCenter">Eco Companion</h4>
                      <p className="medium alignCenter">Web Development</p>
                    </div>
                  </div>
                  <div className="wdPer25 floatLeft">
                    <div className="ml2 mr2">
                      <img className="displayBlock ma mb2" src={client6} />
                      <h4 className="alignCenter">Elit Square</h4>
                      <p className="medium alignCenter">Web Development</p>
                    </div>
                  </div>
                  <div className="wdPer25 floatLeft">
                    <div className="ml2">
                      <img className="displayBlock ma mb2" src={client4} />
                      <h4 className="alignCenter">Runners Connect</h4>
                      <p className="medium alignCenter">
                        UX/UI Design | Web Dev.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </MediaQuery>
            <MediaQuery minWidth={701} maxWidth={899}>
              <div className="wdPer100 overFlowHidden mt5 ">
                <div className="wdPer33 floatLeft">
                  <div className="mr2">
                    <img className="displayBlock ma mb2" src={client1} />
                    <h4 className="alignCenter">WAI</h4>
                    <p className="large alignCenter">Data Analytics</p>
                  </div>
                </div>
                <div className="wdPer33 floatLeft">
                  <div className="ml2 mr2">
                    <img className="displayBlock ma mb2" src={client5} />
                    <h4 className="alignCenter">Eco Companion</h4>
                    <p className="medium alignCenter">Web Development</p>
                  </div>
                </div>
                <div className="wdPer33 floatLeft">
                  <div className="ml2">
                    <img className="displayBlock ma mb2" src={client6} />
                    <h4 className="alignCenter">Elit Square</h4>
                    <p className="medium alignCenter">Web Development</p>
                  </div>
                </div>
              </div>
              <div className="wdPer100 overFlowHidden mt4">
                <div className="wdPer33 floatLeft">
                  <div className="mr2">
                    <img className="displayBlock ma mb2" src={client4} />
                    <h4 className="alignCenter">Runners Connect</h4>
                    <p className="medium alignCenter">
                      UX/UI Design | Web Dev.
                    </p>
                  </div>
                </div>
              </div>
            </MediaQuery>
            <MediaQuery maxWidth={700}>
              <div className="wdPer100 overFlowHidden mt5 ">
                <div className="wdPer50 floatLeft">
                  <div className="mr2">
                    <img className="displayBlock ma mb2" src={client1} />
                    <h4 className="alignCenter">WAI</h4>
                    <p className="large alignCenter">Data Analytics</p>
                  </div>
                </div>
                <div className="wdPer50 floatLeft">
                  <div className="ml2">
                    <img className="displayBlock ma mb2" src={client5} />
                    <h4 className="alignCenter">Eco Companion</h4>
                    <p className="medium alignCenter">
                      UX/UI Design | Web Dev.
                    </p>
                  </div>
                </div>
              </div>
              <div className="wdPer100 overFlowHidden mt5 ">
                <div className="wdPer50 floatLeft">
                  <div className="mr2">
                    <img className="displayBlock ma mb2" src={client6} />
                    <h4 className="alignCenter">Elit Square</h4>
                    <p className="medium alignCenter">Web Development</p>
                  </div>
                </div>

                <div className="wdPer50 floatLeft">
                  <div className="ml2">
                    <img className="displayBlock ma mb2" src={client4} />
                    <h4 className="alignCenter">Runners Connect</h4>
                    <p className="medium alignCenter">Web Development</p>
                  </div>
                </div>
              </div>
            </MediaQuery>
          </div>
        </div>
      </section>
    );
  }

  
  render() {
    return (
      <React.Fragment>
        <section className="landingSection background overFlowHidden">
          <div className="container">
            <Header homeClass={"colorOrange"} />
            <div className="mainHeading fadeInSlow">
              <h1>
                ROBOTRONICS{" "}
                <span className="primaryGradientText">PAKISTAN</span>
              </h1>
              <p className="large mt1">
              We provide children, parents, teachers, schools and all interested parties with an interactive network utilizing our established relations with highly recognized institutions in the region. Robotronics Pakistan provides a whole range of services related to Robotics.
              </p>
              <div className="buttonBar mt2">
                <button
                  className="primary"
                  onClick={() =>
                    scrollToComponent(this.contact, {
                      offset: -100,
                      align: "top",
                      duration: 500
                    })
                  }
                >
                  Discuss Project
                </button>
                <a
                  className="primary"
                  onClick={() =>
                    scrollToComponent(this.ourWork, {
                      offset: -100,
                      align: "top",
                      duration: 500
                    })
                  }
                >
                  See Portfolio
                </a>
              </div>
            </div>
            <div className={"mainMockup fadeInUpBig animationDelay1 animated"}>
            </div>
          </div>
        </section>
        {this.renderWhatWeDo()}
        {this.renderWhatWeHaveDone()}
        {this.renderWhoWeWorkFor()}
      </React.Fragment>
    );
  }
}

export default LandingPage;
