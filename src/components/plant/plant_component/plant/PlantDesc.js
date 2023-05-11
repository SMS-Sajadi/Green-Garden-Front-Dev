import React from "react";
import "./PlantDesc.css";
import alovera from "../../assets/alovera.png";
import temp from "../../assets/temp.png";
import sensitive from "../../assets/sensitive.png";
import sun from "../../assets/sun.png";
import Meintenance from "./Meintenance";
import GreenHouses from "./GreenHouses";
import Tabs from "./Tabs";

const PlantDesc = () => {
  return (
    <>
      <div className="plantDescContainer">
        <div>
          <img
            src={alovera}
            alt="image1"
            style={{ width: "350px", height: "350px" }}
          />
        </div>
        <div className="leftSection">
          <h2>آلوئه ورا</h2>
          <h3>توضیحات: </h3>
          <p>
            توضیحات: لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
            با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
            در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای
            زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و
            متخصصان را می طلبد.
          </p>
          <div className="specifications">
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={sun}
                alt="image1"
                style={{ width: "35px", height: "35px" }}
              />
              <p>نور: متوسط</p>
            </div>
            <p style={{ margin: "20px 30px", alignItems: "center" }}>|</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={sensitive}
                alt="image1"
                style={{ width: "30px", height: "30px" }}
              />
              <p>حساسیت زا: خیر</p>
            </div>
            <p style={{ margin: "20px 30px", alignItems: "center" }}>|</p>

            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={temp}
                alt="image1"
                style={{ width: "30px", height: "30px" }}
              />
              <p>محیط مرطوب</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Tabs />
        {/* <Meintenance /> */}
        {/* <GreenHouses /> */}
      </div>
    </>
  );
};

export default PlantDesc;
