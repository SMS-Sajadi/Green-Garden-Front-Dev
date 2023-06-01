import React from "react";
import { pushRotate as Menu } from "react-burger-menu";
import '../assets/styles/hamburger.css';
import { Link } from "react-router-dom";

const HamburgerMenue = () => {



  return (
    <Menu right= {true} >
      <Link className="menu-item text-primary" to="/">
        صفحه اصلی
      </Link>
      <Link className="menu-item text-primary" to="/home/suggestion">
        پیشنهاد گیاه
      </Link>
      <Link className="menu-item text-primary" to="/home/aboutUs">
        درباره ما
      </Link>
    </Menu>
  );
};

export default HamburgerMenue;
