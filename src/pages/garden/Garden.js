import React from "react";
import { Link } from "react-router-dom";
// Components
import HeaderProfile from "../../components/profile/HeaderProfile";
import Personalnfo from "../../components/profile/Personalnfo";
import BusinessInfo from "../../components/profile/BusinessInfo";
import GardenScore from "../../components/profile/GardenScore";
import Product from "../../components/profile/Product";
//image
import garden from "../../assets/images/plants/14.jpg";
import plant from "../../assets/images/plants/22.png";
import parvaneh from '../../assets/images/temp/parvaneh.png'


const Garden = () => {
  return (
    <div>
      <HeaderProfile
        prof_info={{ image: garden, name: "گلخانه رز", describe: "گلخانه" }}
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
                  <BusinessInfo info={{ business_id: "589955", img: parvaneh }} />
                  <h5 className="mt-4 mb-0">محصولات :</h5>
                  <div className="row">
                    <Product
                      info={{
                        image: plant,
                        name: "plant",
                        category: "flow",
                        id: 2,
                      }}
                    />
                    <Product
                      info={{
                        image: plant,
                        name: "plant",
                        category: "flow",
                        id: 2,
                      }}
                    />
                    <Product
                      info={{
                        image: plant,
                        name: "plant",
                        category: "flow",
                        id: 2,
                      }}
                    />

                  </div>

                  <div className="col-12 mt-4 pt-2">
                    <Link to="/" className="btn btn-primary">
                      نمایش بیشتر{" "}
                      <i className="uil uil-angle-left-b align-middle"></i>
                    </Link>
                  </div>
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
