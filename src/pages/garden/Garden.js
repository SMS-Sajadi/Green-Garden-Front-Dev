import React from "react";
// Components
import HeaderProfile from "../../components/profile/HeaderProfile";
import Personalnfo from "../../components/profile/Personalnfo";
import BusinessInfo from "../../components/profile/BusinessInfo";
import GardenScore from "../../components/profile/GardenScore";
import Product from "../../components/profile/Product";
//image
import garden from "../../assets/images/plants/14.jpg";

const Garden = () => {
  return (
    <div>
      <HeaderProfile
        prof_info={{ image: garden, name: "گلخانه سپاهان", describe: "گلخانه" }}
      />

      <section className="section mt-60">
        <div className="container mt-lg-3">
          <div className="row">
            <GardenScore />
            <div className="col-lg-8 col-12">
              <div className="border-bottom pb-4">
                <div className="row">
                  <Personalnfo
                    info={{
                      email: "mkkfj@hbf",
                      phone_number: "09140466",
                      saved: "",
                    }}
                  />
                  <BusinessInfo info={{ business_id: "589955", img: garden }} />
                  <h5 class="mt-4 mb-0">محصولات :</h5>
                  <Product />

                </div>
              </div>
            </div>



          </div>
        </div>
      </section>
    </div>
  );
};

export default Garden;
