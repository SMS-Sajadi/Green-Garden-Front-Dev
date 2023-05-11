import React from "react";
import "./Products.css";
import image11 from "../../assets/image11.png";
import image12 from "../../assets/image12.png";
import image13 from "../../assets/image13.png";
import image14 from "../../assets/image14.png";
import setting2 from "../../assets/setting2.png";

import Collapsible from "./Collapsible";

const Products = () => {
  return (
    <div className="all">
      <h2>محصولات:</h2>

      <div className="productsContainer">

        <div class="productCard">
          <img src={image11} alt="image1" />
          <div className="prdCardBottom">
            <img src={setting2} alt=""/>
            <p>جزییات گل</p>
          </div>
        </div>

        <div class="productCard">
          <img src={image12} alt="image1" />
          <div className="prdCardBottom">
            <img src={setting2} alt=""/>
            <p>جزییات گل</p>
          </div>
        </div>

        <div class="productCard">
          <img src={image13} alt="image1" />
          <div className="prdCardBottom">
            <img src={setting2} alt=""/>
            <p>جزییات گل</p>
          </div>
        </div>

        <div class="productCard">
          <img src={image14} alt="image1" />
          <div className="prdCardBottom">
            <img src={setting2} alt=""/>
            <p>جزییات گل</p>
          </div>
        </div>

      </div>



      <Collapsible />
    </div>
  );
};

export default Products;
