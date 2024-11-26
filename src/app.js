import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  browserHistory,
  Switch,
  Link,
} from "react-router-dom";
import LandingPage from "./components/landing";
import AboutUsPage from "./components/about";

import { ParallaxProvider } from 'react-scroll-parallax';
import  "./stylesheets/animate.scss";
import  "./stylesheets/creative.scss";
import  "./stylesheets/structure.scss";
class TechClan extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <ParallaxProvider>
        <Router history={browserHistory}>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/about" component={AboutUsPage} />
           
          
          </Switch>
        </Router>
      </ParallaxProvider>
    );
  }
}

export default TechClan;
