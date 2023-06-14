import React from "react";
import SideBar from "../SideBar/SideBar";
import InfoForm from "../InfoForm/InfoForm";
import styles from "./styles/index.css";
import circle from "../../img/circle.png";
const UserProfile = () => {
  return (
    <div className="containe">
      <SideBar />
      <InfoForm />
    </div>
  );
};

export default UserProfile;
