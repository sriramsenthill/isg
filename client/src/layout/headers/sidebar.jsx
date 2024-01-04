import Link from "next/link";
import React from "react";
import MobileMenus from "./mobile-menus";

const Sidebar = ({ isActive, setIsActive }) => {
  return (
    <>
      <div className={`tp-sidebar-menu ${isActive ? "sidebar-opened" : ""}`}>
        <button className="sidebar-close" onClick={() => setIsActive(false)}>
          <i className="icon_close"></i>
        </button>
        <div className="side-logo mb-30">
          <Link href="/">
            <img src="/assets/img/isg/logoAni.gif" alt="logo" style={{ width: "100px", height: "auto" }} />
          </Link>
        </div>
        <div className="mobile-menu mean-container">
          <MobileMenus />
        </div>
        <div className="sidebar-info">
          <div className="side-social">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div className={`body-overlay ${isActive ? "opened" : ""} `} onClick={() => setIsActive(false)}></div>
    </>
  );
};
export default Sidebar;
