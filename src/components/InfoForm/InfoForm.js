import React from "react";
import CardsInLeftContent from "./CardsInLeftContent/CardsInLeftContent";
import arrowLeft from "../../img/arrowLeft.png";
import dots from "../../img/dots.png";
import Header from "./Header/Header";
import Form from "./Form/Form";
import styles from "./styles/index.css";

const InfoForm = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <Form />
        <CardsInLeftContent />
      </div>
    </div>
  );
};

export default InfoForm;
