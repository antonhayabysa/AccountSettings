import React from "react";
import Ellipse from "../../img/Ellipse.png";
import logo from "../../img/logo.png";
import circle from "../../img/circle.png";
import chat from "../../img/chat.png";
import jsIcon from "../../img/jsIcon.png";
import logout from "../../img/logout.png";
import DashboardIcon from "../../icons/DashboardIcon/DashboardIcon";
import QuestionCircleIcon from "../../icons/QuestionCircleIcon/QuestionCircleIcon";
import styles from "./styles/index.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarBlock_1">
        <img src={logo} alt="Logo" className="sidebarLogo" />
      </div>
      <div className="sidebarBlock_2">
        <div className="sidebarItemBlock_1">
          <DashboardIcon />
          <span className="textDashboard">Dashboard</span>
        </div>
        <div className="sidebarItemBlock_1">
          <QuestionCircleIcon />
          <span className="textFAQ">FAQ</span>
        </div>
      </div>
      <hr className="sidebarDivider" />
      <div className="sidebarBlock_3">
        <div className="sidebarItemBlock_3">
          <img src={Ellipse} alt="Ellipse " className="sidebarEllipse" />
          <span className="preQualify">Pre-qualify</span>
        </div>
        <hr className="dividerVertical" />
        <div className="sidebarItemBlock_3">
          <img src={circle} alt="circle " className="sidebarCircle" />
          <span className="itemTextSidebarBlock_3">Compare and select</span>
        </div>
        <hr className="dividerVertical" />
        <div className="sidebarItemBlock_3">
          <img src={circle} alt="circle " className="sidebarCircle" />
          <span className="itemTextSidebarBlock_3">Apply with a lender</span>
        </div>
        <hr className="dividerVertical" />
        <div className="sidebarItemBlock_3">
          <img src={circle} alt="circle " className="sidebarCircle" />
          <span className="itemTextSidebarBlock_3">Finalize your loan</span>
        </div>
        <hr className="dividerVertical" />
        <div className="sidebarItemBlock_3">
          <img src={circle} alt="circle " className="sidebarCircle" />
          <span className="itemTextSidebarBlock_3">Receive your funds</span>
        </div>
      </div>
      <div className="sidebarBlock_4">
        <div className="sidebarBlock_4_Item_1">
          <img src={chat} alt="chat " className="sidebarChat" />
          <span className="textSupport">Customer support</span>
        </div>
        <div className="sidebarBlock_4_Item_2">
          <img src={jsIcon} alt="jsIcon " className="sidebarJsIcon" />
          <div className="textContainer">
            <span className="textAccount">Account</span>
            <span className="textName">John S.</span>
          </div>
        </div>
        <div className="sidebarBlock_4_Item_2">
          <img src={logout} alt="logout " className="sidebarlogout" />
          <span className="textLogOut">Log out</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
