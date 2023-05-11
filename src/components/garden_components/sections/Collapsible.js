import React from "react";
import { useState } from "react";
import image12 from "../../assets/image12.png";
import image13 from "../../assets/image13.png";

import setting2 from "../../assets/setting2.png";

const Collapsible = () => {
  const [open, setOPen] = useState(false);

  const toggle = () => {
    setOPen(!open);
  };

  return (
    <div>
      <button
        onClick={toggle}
        style={{
          backgroundColor: "#03CE91",
          padding: "1rem 3rem",
          border: "none",
          borderRadius: "5px",
          fontWeight: "600",
          marginLeft: "10rem",
          marginTop: "2rem"
        }}
      >
        نمایش بیشتر
      </button>
      {open && (
        <div className="toggle">
          <div className="productsContainer">
            <div class="productCard">
              <img src={image12} alt="image1" />
              <div className="prdCardBottom">
                <img src={setting2} alt="" />
                <p>جزییات گل</p>
              </div>
            </div>

            <div class="productCard">
              <img src={image13} alt="image1" />
              <div className="prdCardBottom">
                <img src={setting2} alt="" />
                <p>جزییات گل</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Collapsible;
