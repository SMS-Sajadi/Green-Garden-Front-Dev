import React from "react";
// Components
import Slidebar from "../../components/plant/Slidebar";
import PlantGardens from "./PlantGardens";

import sun from "../../assets/icons/sun2.svg";
import waterIcon from "../../assets/icons/water.svg";

const PlantExplain = ({ info }) => {
  const { name, description, lihgt_intensity, water, type, plant_image_ur_listl } = info;

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-5">
          <Slidebar album={plant_image_ur_listl}/>
        </div>

        <div className="col-md-7 mt-4 mt-sm-0 pt-2 pt-sm-0">
          <div className="section-title ms-md-4">
            <h4 className="title">{name}</h4>
            <h5 className="text-muted">{type}</h5>

            <h5 className="mt-4 py-2">توضیحات :</h5>
            <p className="text-muted">{description}</p>

            <div className="mt-4 pt-2" style={{ display: "flex" }}>
              <div className="d-flex align-items-center">
                <ul className="list-unstyled mb-0 ms-3">
                  <li className="list-inline-item">
                    <div
                      className="btn btn-icon btn-soft-primary"
                    >
                      <img
                        src={sun}
                        alt=""
                        style={{ width: "23px", height: "23px" }}
                      />
                    </div>
                  </li>
                </ul>
                <h6 className="mb-0" style={{ marginRight: "14px" }}>
                  نور :
                  <span style={{ marginRight: "7px" }}>{lihgt_intensity}</span>
                </h6>
              </div>

              <div className="d-flex align-items-center">
                <ul className="list-unstyled mb-0 ms-3">
                  <li className="list-inline-item">
                    <div
                      className="btn btn-icon btn-soft-primary"
                    >
                      <img
                        src={waterIcon}
                        alt=""
                        style={{ width: "23px", height: "23px" }}
                      />
                    </div>
                  </li>
                </ul>
                <h6 className="mb-0" style={{ marginRight: "14px" }}>
                  آب مورد نیاز :
                  <span style={{ marginRight: "7px" }}>{water}</span>
                </h6>
              </div>
            </div>
          </div>
        </div>

        <PlantGardens info={info} />
      </div>
    </div>
  );
};

export default PlantExplain;
