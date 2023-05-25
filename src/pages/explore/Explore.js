import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
// image  and icons
import plantBg from "../../assets/images/plants/shahpasand.jpg";
import aloeVear from "../../assets/images/plants/aloe vear.jpg";
import kaktos from "../../assets/icons/kaktos.svg";
// Component
import Card from "../../components/Card";
import HorizontalCard from "../../components/HorizontalCard";

const Explore = () => {
  const info = {
    id: 2,
    image: plantBg,
    name: "plant",
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
              <p className="display-5 fw-bold mb-3">
                گیاهانی شاداب و زیبا
                <br></br>
                <TypeAnimation
                  reverse
                  sequence={[
                    "متناسب با شرایط شما",
                    2000, // Waits 2s
                    "متناسب با سلیقه شما",
                    1000, // Waits 1s
                  ]}
                  wrapper="span"
                  className="text-primary typewrite textwrite"
                  speed={5}
                  cursor={false}
                  repeat={3}
                />
              </p>
              <div className="mt-4 pt-2" id="suggest">
                <Link to="/home/suggestion" className="btn btn-primary mt-2 me-2">
                  <img src={kaktos} alt="" />
                  اکنون پیشنهاد بگیرید
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="position-relative">
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
            <Card  key={info.id} info={info} />
            <Card
            key={1}
              info={{ image: aloeVear, name: "aloe", category: "winter" }}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="section-title mb-4 pb-2">
                <h4 className="title">دسته بندی ها</h4>
                <h4 className="title"> --------------------------</h4>
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
