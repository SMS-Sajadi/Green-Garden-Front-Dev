import React from "react";
import { TypeAnimation } from "react-type-animation";
// image  and icons
import plantBg from "../../assets/images/plants/shahpasand.jpg";
import aloeVear from "../../assets/images/plants/aloe vear.jpg";
import kaktos from "../../assets/icons/kaktos.svg";
// Component
import Card from "../../components/Card";
import HorizontalCard from "../../components/HorizontalCard";

const Explore = () => {
  const info = {
    image: plantBg,
    title: "plant",
    category: "fall",
  };

  return (
    <div>
      <section
        className="bg-home rtl-personal-hero bg-light d-flex align-items-center"
        id="home"
      >
        <div className="container">
          <div className="col-lg-8 col-md-9">
            <div className="title-heading mt-4">
              <h1 className="display-5 fw-bold mb-3">
                گیاهانی شاداب و زیبا
                <br></br>
                <TypeAnimation
                  reverse
                  sequence={[
                    "متناسب با سلیقه شما",
                    2000, // Waits 2s
                    "متانسب با شرایط شما",
                    1000, // Waits 1s
                  ]}
                  wrapper="span"
                  className="text-primary typewrite"
                  speed={5}
                  cursor={false}
                  repeat={3}
                  style={{ fontSize: "32px", display: "inline-block" }}
                />
              </h1>
              <div className="mt-4 pt-2" id="suggest">
                <a href="#portfolio" className="btn btn-primary mt-2 me-2">
                  <img src={kaktos} alt="" />
                  اکنون پیشنهاد بگیرید
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div classNaem="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="section-title mb-4 pb-2">
                <h4 className="title">تازه ها</h4>
                <h4 className="title"> --------------------------</h4>
              </div>
            </div>
          </div>
          <div id="grid" className="row">
            <Card info={info} />
            <Card
              info={{ image: aloeVear, title: "aloe", category: "winter" }}
            />
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <div class="section-title mb-4 pb-2">
                <h4 class="title">دسته بندی ها</h4>
                <h4 class="title"> --------------------------</h4>
              </div>
            </div>
          </div>

          <HorizontalCard info={info}/>

        </div>
      </section>
    </div>
  );
};

export default Explore;
