import React from "react";
import arrow from "../../assets/arrow.png";
import sun from "../../assets/sun.png";
import sensitive from "../../assets/sensitive.png";
import weather from "../../assets/weather.png";
import water from "../../assets/water.png";
import pet from "../../assets/pet.png";
import smell from "../../assets/smell.png";
import eatable from "../../assets/eatable.png";
import growthLevel from "../../assets/growthLevel.png";



const Meintenance = () => {
  return (
    <div style={{textAlign: "right", margin: "0 auto"}}>
      <div>
      <img    src={arrow}  alt="image1" />
        <img src={sun}  alt="image1" style={{width: "30px", heigth: "30px", marginRight: "15px", marginLeft: "15px"}} />
        <span>نور: متوسط</span>
      </div>

      <div>
      <img    src={arrow}  alt="image1" />
        <img src={sensitive}  alt="image1" style={{width: "30px", heigth: "30px", marginRight: "15px", marginLeft: "15px"}} />
        <span>حساسیت زا: خیر</span>
      </div>

      <div>
      <img    src={arrow}  alt="image1" />
        <img src={weather}  alt="image1" style={{width: "30px", heigth: "30px", marginRight: "15px", marginLeft: "15px"}} />
        <span>آب و هوا: مرطوب و دمای محیط</span>
      </div>

      <div>
      <img    src={arrow}  alt="image1" />
        <img src={water}  alt="image1"  style={{width: "30px", heigth: "30px", marginRight: "15px", marginLeft: "15px"}}/>
        <span>آب مورد نیاز: دوبار در هفته</span>
      </div>

      <div>
      <img    src={arrow}  alt="image1" />
        <img src={pet}  alt="image1" style={{width: "30px", heigth: "30px", marginRight: "15px", marginLeft: "15px"}} />
        <span>حیوان خانگی: ضرری ندارد</span>
      </div>

      <div>
      <img    src={arrow}  alt="image1" />
        <img src={smell}  alt="image1" style={{width: "30px", heigth: "30px", marginRight: "15px", marginLeft: "15px"}} />
        <span>عطری بودن: خیر</span>
      </div>

      <div>
      <img    src={arrow}  alt="image1" />
        <img src={eatable}  alt="image1" style={{width: "30px", heigth: "30px", marginRight: "15px", marginLeft: "15px"}} />
        <span>خوراکی: بله</span>
      </div>

      <div>
      <img    src={arrow}  alt="image1" />
        <img src={growthLevel}  alt="image1"  style={{width: "30px", heigth: "30px", marginRight: "15px", marginLeft: "15px"}}/>
        <span>مرحله رشد: رشد کامل</span>
      </div>
    </div>
  );
};

export default Meintenance;
