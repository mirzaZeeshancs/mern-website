import AboutUsPage from "../about.js";
import LandingPage from "../landing.js";
import React from "react";
import { Link } from "react-router-dom";
import creativeStyles from "../../stylesheets/creative.scss";
import structureStyles from "../../stylesheets/structure.scss";

export const Header = ({ homeClass, aboutClass}) => {
  return (
    <div>
      <div className="navigation mt1">
        <ul>
          <li className="floatLeft mr2">
            <Link to="/">
              <div className="logo"></div>
            </Link>
          </li>
          <li className="floatLeft mr2 mt2">
            <Link
              to="/"
              className={homeClass ? homeClass + " markProBold" : ""}
            >
              Home
            </Link>
          </li>
          <li className="floatLeft mr2 mt2">
            <Link
              to="/about"
              className={aboutClass ? aboutClass + " markProBold" : ""}
            >
              About Us
            </Link>
          </li>
          <li className="floatLeft mr2 mt2">
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
