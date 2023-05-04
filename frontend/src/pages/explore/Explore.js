import React from "react";
import { TypeAnimation } from "react-type-animation";

const Explore = () => {
  return (
    <div>
      <section
        className="bg-home rtl-personal-hero bg-light d-flex align-items-center"
        style={{ background: "url('images/1.png') center center" }}
        id="home"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-9">
              <div className="title-heading mt-4">
                <h1 className="display-3 fw-bold mb-3">
                  گیاهانی شاداب و زیبا
                  <br></br>
                  <TypeAnimation
                    reverse
                    sequence={[
                      "متناسب با سلیقه شما",
                      2000, // Waits 2s
                      "متانسب با شرایط شما", 
                      1000, // Waits 1s
                      () => {
                        console.log("Sequence completed"); 
                      },
                    ]}
                    wrapper="span"
                    className="text-primary typewrite"
                    speed={5}
                    cursor={false}
                    repeat={3}
                    style={{ fontSize: "32px", display: "inline-block" }}
                  />
                </h1>
                <div className="mt-4 pt-2">
                  <a href="#portfolio" className="btn btn-primary mt-2 me-2">
                    <i className="uil uil-camera"></i>اکنون پیشنهاد بگیرید{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;
