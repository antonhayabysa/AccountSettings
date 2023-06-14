import React, { useState } from "react";
import edit from "../../../img/edit.png";
import dots from "../../../img/dots.png";
import ModalWindow from "../../ModalWindow/ModalWindow";
import ModalForm from "../../ModalForm/ModalFomr";
import styles from "./styles/index.css";

const Form = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <div className="formSection_1">
        <div className="formTitle">
          <span className="formTitleText">Personal Information</span>
          <img src={edit} edit="arrowLeft" className="editIcon" />
        </div>
        <div className="formRow">
          <hr className="delimiter" />
          <div className="formTitle">
            <span className="formFieldLabel">First Name:</span>
            <span className="formFieldValue">John</span>
          </div>
          <hr className="delimiter" />
          <div className="formTitle">
            <span className="formFieldLabel">Last Name:</span>
            <span className="formFieldValue">Smith</span>
          </div>
          <hr className="delimiter" />
        </div>
      </div>
      <div className="formSection">
        <div className="formTitle">
          <span className="formTitleText">Security Preferences</span>
          <img
            src={edit}
            edit="arrowLeft"
            className="editIcon"
            onClick={openModal}
          />
        </div>
        <div className="formRow">
          <hr className="delimiter" />
          <div className="formTitle">
            <span className="formFieldLabel">Password:</span>
            <span className="formFieldValue">********</span>
          </div>
          <ModalWindow
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="My Modal"
          >
            <ModalForm closeModal={closeModal} lastName="Smitt" />
          </ModalWindow>
          <hr className="delimiter" />
        </div>
      </div>
      <div className="formSection_1">
        <div className="formTitle">
          <span className="formTitleText">Contact Information</span>
          <img src={edit} edit="arrowLeft" className="editIcon" />
        </div>
        <div className="formRow">
          <hr className="delimiter" />
          <div className="formTitle">
            <span className="formFieldLabel">Email:</span>
            <span className="formFieldValue">borrower@email.com</span>
          </div>
          <hr className="delimiter" />
          <div className="formTitle">
            <span className="formFieldLabel">Phone Number:</span>
            <span className="formFieldValue">+1 650 - 513 - 0514</span>
          </div>
          <hr className="delimiter" />
        </div>
      </div>
    </div>
  );
};

export default Form;
