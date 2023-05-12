import React from "react";
import "./Panel.css";
import star from "../../assets/star.png";
import vector from "../../assets/vector.png";
import whiteVector from "../../assets/whiteVector.png";
import settings from "../../assets/settings.png";

const Panel = () => {
  return (
    <div className="panel">
      <div className="panelTop">
        <div>
          <img src={vector} alt="image1" className="panelIcon" />
          <p>تعداد</p>
          <p>127</p>
        </div>
        <div>
          <img src={star} alt="image1" className="panelIcon" />
          <p>امتیاز</p>
          <p>4.7</p>
        </div>
      </div>

      <div className="panelScore">
        <p>امتیاز:</p>
        <div className="meter">
  <span style={{width: "35%"}}></span>
</div>

      </div>

      <div >
        <button className="panelBtnProf">
          {" "}
          <img src={whiteVector} alt="image1" className="panelBtnIcon" />
          پروفایل
        </button>
        <button  className="panelBtnProducts">
          <img src={settings} alt="image1" className="panelBtnIcon" />
          محصولات
        </button>
      </div>
    </div>
  );
};

export default Panel;
