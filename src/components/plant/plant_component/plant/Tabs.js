import React from "react";
import "./Tabs.css";
import { useState } from "react";
import Meintenance from "./Meintenance";
import GreenHouses from "./GreenHouses";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  return (
    <div className="Tabs">
      <ul className="nav">
        <li
          className={activeTab === "tab1" ? "active" : ""}
          onClick={handleTab1}
        >
          طریقه نگهداری
        </li>
        <li
          className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}
        >
       گلخانه ها
        </li>
      </ul>

      <div className="outlet">
        {activeTab === "tab1" ? <Meintenance /> : <GreenHouses />}
      </div>
    </div>
  );
};

export default Tabs;
