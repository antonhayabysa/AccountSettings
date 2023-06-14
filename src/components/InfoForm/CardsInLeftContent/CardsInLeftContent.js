import React from "react";
import checkboxIcon from "../../../img/checkbox.png";
import styles from "./styles/index.css";

const CardsInLeftContent = () => {
  return (
    <div className="cardsHeader">
      <div>
        <div className="textCardsContainer">
          <div className="cardTitle">
            <span className="textCardsTitle">Mailing Preferences</span>
          </div>
          <div className="cardTitle">
            <span className="textCards">
              Adjust your mailing preferences below.
            </span>
          </div>
        </div>
        <div className="checkboxContainer">
          <div className="checkboxIconContainer">
            <img
              src={checkboxIcon}
              checkboxIcon="dots "
              className="checkboxIcon"
            />
            <span className="textCheckbox">Newsletters</span>
          </div>
          <div className="checkboxIconContainer">
            <img
              src={checkboxIcon}
              checkboxIcon="dots "
              className="checkboxIcon"
            />
            <span className="textCheckbox">Marketing</span>
          </div>
        </div>
      </div>
      <div className="button ">
        <span className="buttonText">Update my preferences</span>
      </div>
    </div>
  );
};

export default CardsInLeftContent;
