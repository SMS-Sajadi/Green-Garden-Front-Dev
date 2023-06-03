import React from "react";
import { changeValue } from "../../featurs/translateType";
import { put } from "../../services/api";
import { useCookies } from "react-cookie";
import { translateType } from "../../featurs/translateType";
// Components
import Slidebar from "../../components/plant/Slidebar";
import PlantGardens from "./PlantGardens";
import { notify } from "../../featurs/toast";

import sun from "../../assets/icons/sun2.svg";
import waterIcon from "../../assets/icons/water.svg";
import saved from "../../assets/icons/saved.svg";

const PlantExplain = ({ info }) => {
  console.log(info);

  const [cookies, setCookie] = useCookies(["token"]);

  const { name, description, light_intensity, water, type, images, id, main_img} = info;

  const savePlant = async () => {
    const res = await put(`accounts/bookmark-plant/${id}`, cookies["token"]);
    console.log(res.status);
    if (res.status === 200) {
      console.log("here");
      notify("گیاه مورد نطرتان ذخیره شد", "success");
    }
  };

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-5">
          {Array.isArray(images) && <Slidebar album={images} main_img={main_img}/>}
        </div>

        <div className="col-md-7 mt-4 mt-sm-0 pt-2 pt-sm-0">
          <div className="section-title ms-md-4">
            <h4 className="title">{name}</h4>
            <h5 className="text-muted">{translateType(type)}</h5>

            <h5 className="mt-4 py-2">توضیحات :</h5>
            <p className="text-muted">{description}</p>

            <div
              className="mt-4 pt-2"
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              <div
                className="d-flex align-items-center mb-3"
                onClick={savePlant}
              >
                <ul className="list-unstyled mb-0 ms-3">
                  <li className="list-inline-item">
                    <div className="btn btn-icon btn-soft-primary">
                      <img
                        src={saved}
                        alt=""
                        style={{ width: "23px", height: "23px" }}
                      />
                    </div>
                  </li>
                </ul>
                <h6 className="mb-0" style={{ marginRight: "14px" }}>
                  ذخیره
                  <span style={{ marginRight: "7px" }}></span>
                </h6>
              </div>

              <div className="d-flex align-items-center mb-3">
                <ul className="list-unstyled mb-0 ms-3">
                  <li className="list-inline-item">
                    <div className="btn btn-icon btn-soft-primary">
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
                  <span style={{ marginRight: "7px" }}>
                    {changeValue("light", light_intensity)}
                  </span>
                </h6>
              </div>

              <div className="d-flex align-items-center mb-3">
                <ul className="list-unstyled mb-0 ms-3">
                  <li className="list-inline-item">
                    <div className="btn btn-icon btn-soft-primary">
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
                  <span style={{ marginRight: "7px" }}>
                    {changeValue("water", water)}
                  </span>
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
