// UserProfile.js
import React from "react";
import SideBar from "../SideBar/SideBar";
import InfoForm from "../InfoForm/InfoForm";
import styles from "./styles/index.css";
const UserProfile = () => {
  return (
    <div className="container">
      UserProfile
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="infoForm">
        <InfoForm />
      </div>
    </div>
  );
};

export default UserProfile;
