import React from "react";
import arrowLeft from "../../../img/arrowLeft.png";
import dots from "../../../img/dots.png";
import styles from "./styles/index.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="containerHeader">
        <div className="containerTitle">
          <div className="arrowLeftContainer">
            <img src={arrowLeft} alt="arrowLeft " className="arrowLeft" />
            <span className="textSettings">Account Settings</span>
          </div>
        </div>
        <div className="dotsContainer">
          <img src={dots} alt="dots " className="dots" />
        </div>
      </div>
      <div className="textIn">
        <span className="text">
          View and update your account profile, communication preferences, and
          more.
        </span>
      </div>
    </div>
  );
};

export default Header;
