import React, { useState } from "react";
import cross from "../../img/cross.png";
import noeye from "../../img/noeye.png";
import deltext from "../../img/deltext.png";
import styles from "./styles/index.css";

const ModalForm = ({ closeModal, lastName }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleCurrentPasswordChange = (event) => {
    setCurrentPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Проверка пароля
    const isLastNameIncluded = newPassword
      .toLowerCase()
      .includes(lastName.toLowerCase());
    const isLengthValid = newPassword.length >= 12;
    const hasSymbol = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(newPassword);
    const hasUppercaseLetter = /[A-Z]/.test(newPassword);

    if (isLastNameIncluded) {
      setError("Password cannot contain your last name.");
    } else if (!isLengthValid) {
      setError("Password must be at least 12 characters long.");
    } else if (!hasSymbol) {
      setError("Password must contain at least one symbol.");
    } else if (!hasUppercaseLetter) {
      setError("Password must contain at least one uppercase letter.");
    } else {
      setError("");
      // Дополнительная логика обновления настроек
      closeModal();
    }
  };

  return (
    <div>
      <div className="ModalTitleSecurity">
        <span className="formTitleText">Security Preferences</span>
        <img
          src={cross}
          edit="cross"
          className="crossIcon"
          onClick={closeModal}
        />
      </div>
      <div className="FormRow">
        <div className="ModalFormTitle">
          <div className="ModalFormFieldLabel">
            <span className="CurrentPasswordText">Current password</span>
          </div>
          <div className="ModalTitle">
            <input
              type="password"
              className="PasswordInput"
              value={currentPassword}
              onChange={handleCurrentPasswordChange}
              placeholder="Your password"
            />
            {error ? (
              <div className="imageContainer">
                <img src={noeye} edit="noeye" className="noeyeIcon" />
                <img src={deltext} edit="deltext" className="deltextIcon" />
              </div>
            ) : (
              <img src={noeye} edit="noeye" className="noeyeIcon" />
            )}
          </div>
          <hr className="ModalFormDelimiter" />
          <div className="ModalFormFieldLabel">
            <span className="ForgotText">Forgot password?</span>
          </div>
        </div>
        <div className="ModalFormTitle">
          <div className="ModalFormFieldLabel">
            <span className="CurrentPasswordText">New password</span>
          </div>
          <div className="ModalTitle">
            <input
              type="password"
              className="PasswordInput"
              value={newPassword}
              onChange={handleNewPasswordChange}
              placeholder="Enter your new password"
            />
            {error ? (
              <div className="imageContainer">
                <img src={noeye} edit="noeye" className="noeyeIcon" />
                <img src={deltext} edit="deltext" className="deltextIcon" />
              </div>
            ) : (
              <img src={noeye} edit="noeye" className="noeyeIcon" />
            )}
          </div>
          {error ? (
            <>
              <hr className="ModalFormDelimiterRed" />
              <div className="ModalFormFieldLabel">
                <span className="ForgotTextRed">Cannot contain first name</span>
              </div>
            </>
          ) : (
            <hr className="ModalFormDelimiter" />
          )}
        </div>
        <div className="ModalFormTitle">
          <div className="ModalFormFieldLabel">
            <span className="CurrentPasswordText">Confirm new password</span>
          </div>
          <div className="ModalTitle">
            <input
              type="password"
              className="PasswordInput"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              placeholder="Enter your new password"
            />
            {error ? (
              <div className="imageContainer">
                <img src={noeye} edit="noeye" className="noeyeIcon" />
                <img src={deltext} edit="deltext" className="deltextIcon" />
              </div>
            ) : (
              <img src={noeye} edit="noeye" className="noeyeIcon" />
            )}
          </div>
          {error ? (
            <>
              <hr className="ModalFormDelimiterRed" />
              <div className="ModalFormFieldLabel">
                <span className="ForgotTextRed">Cannot contain first name</span>
              </div>
            </>
          ) : (
            <hr className="ModalFormDelimiter" />
          )}
        </div>
      </div>
      <div className={`btn${error ? " error" : ""}`} onClick={handleSubmit}>
        <span className="btnText">
          {error ? "Update my preferences" : "Update my preferences"}
        </span>
      </div>
    </div>
  );
};

export default ModalForm;
