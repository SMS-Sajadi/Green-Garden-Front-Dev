import React, { useState } from "react";
import { Link } from "react-router-dom";
import { changeValue, translateType } from "../../featurs/translateType";
// Icons
import sun from "../../assets/icons/sun2.svg";
import allergy from "../../assets/icons/allergy.svg";
import temp from "../../assets/icons/temp.svg";
import bill from "../../assets/icons/Layer_1 (1).svg";
import pet from "../../assets/icons/pet-svgrepo-com.svg";
// import weather from "../../assets/icons/weather.svg";
import waterIcon from "../../assets/icons/water.svg";
import fragranceIcon from "../../assets/icons/fragrance.svg";
import eatableIcon from "../../assets/icons/eatable.svg";
import growthIcon from "../../assets/icons/growth.svg";
import locationIcon from "../../assets/icons/location2.svg";
// //image
// import garden from "../../assets/images/garden/g1.jpg";
// import g2 from "../../assets/images/garden/g2.avif";
// import g3 from "../../assets/images/garden/g3.jfif";

// Component
import GardenList from "../garden/GardenList";

const PlantGardens = ({ info }) => {
  const {
    fragrance,
    type,
    light_intensity,
    water,
    growth,
    temperature,
    pet_compatible,
    alergy_compatible,
    attention_need,
    edible,
    gardens,
    location_type,
  } = info;

  // const gardens = [
  //   {
  //     name: "گلخانه ارکیده",
  //     image: garden,
  //     id: 8,
  //     score: 3,
  //   },
  //   {
  //     name: "گلخانه ارکیده",
  //     image: g2,
  //     id: 9,
  //     score: 2,
  //   },
  //   {
  //     name: "گلخانه ارکیده",
  //     image: g3,
  //     id: 10,
  //     score: 4,
  //   },
  //   {
  //     name: "گلخانه ارکیده",
  //     image: g2,
  //     id: 11,
  //     score: 5,
  //   },
  // ];

  const [styles, setStyles] = useState({
    style1: "nav-link py-2 px-5 rounded active",
    style2: "nav-link py-2 px-5 rounded",
    element1: true,
    element2: false,
  });

  const handleStyle = (num) => () => {
    if (num === 2) {
      setStyles({
        style1: "nav-link py-2 px-5 rounded",
        style2: "nav-link py-2 px-5 rounded active",
        element2: true,
        element1: false,
      });
    } else {
      setStyles({
        style1: "nav-link py-2 px-5 rounded active",
        style2: "nav-link py-2 px-5 rounded",
        element1: true,
        element2: false,
      });
    }
  };

  const showAllGarden = (gardens) => {
    return gardens.map((item) => {
      return <GardenList key={item.id * 10} info={item} />;
    });
  };

  return (
    <div className="container mt-100 mt-60">
      <div className="row">
        <div className="col-12">
          <ul className="nav nav-pills shadow flex-column flex-sm-row d-md-inline-flex mb-0 p-1 bg-white rounded position-relative overflow-hidden">
            <li className="nav-item m-1" style={{ cursor: "pointer" }}>
              <div className={styles.style1} onClick={handleStyle(1)}>
                <div className="text-center">
                  <h6 className="mb-0">طریقه نگهداری </h6>
                </div>
              </div>
            </li>

            <li className="nav-item m-1" style={{ cursor: "pointer" }}>
              <div className={styles.style2} onClick={handleStyle(2)}>
                <div className="text-center">
                  <h6 className="mb-0"> گلخانه‌ها</h6>
                </div>
              </div>
            </li>
          </ul>

          {styles.element1 && (
            <div
              className="card mt-3 border-0 tab-pane fade show active"
              id="additional"
            >
              <table className="table">
                <tbody>
                  <tr>
                    <td style={{ width: "180px" }}>
                      <img
                        src={sun}
                        alt=""
                        style={{
                          margin: "0px 12px",
                          width: "30px",
                          height: "30px",
                        }}
                      />
                      نور{" "}
                    </td>
                    <td className="text-muted">
                      {changeValue("light", light_intensity)}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <img src={temp} alt="" style={{ margin: "0px 12px" }} />
                      دما{" "}
                    </td>
                    <td className="text-muted">
                      {changeValue("temperature", temperature)}{" "}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <img
                        src={fragranceIcon}
                        alt=""
                        style={{ margin: "0px 12px" }}
                      />
                      عطری{" "}
                    </td>
                    <td className="text-muted">
                      {changeValue("fragrance", fragrance)}{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src={eatableIcon}
                        alt=""
                        style={{ margin: "0px 12px" }}
                      />
                      خوراکی{" "}
                    </td>
                    <td className="text-muted">
                      {changeValue("edible", edible)}{" "}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <img
                        src={locationIcon}
                        alt=""
                        style={{ margin: "0px 12px", width: "32px" }}
                      />
                      محیط{" "}
                    </td>
                    <td className="text-muted">
                      {changeValue("location_type", location_type)}{" "}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <img
                        src={allergy}
                        alt=""
                        style={{ margin: "0px 12px" }}
                      />
                      حساسیت{" "}
                    </td>
                    <td className="text-muted">
                      {changeValue("alergy", alergy_compatible)}{" "}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <img
                        src={growthIcon}
                        alt=""
                        style={{ margin: "0px 12px" }}
                      />
                      مرحله رشد{" "}
                    </td>
                    <td className="text-muted">
                      {changeValue("growth", growth)}{" "}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <img
                        src={waterIcon}
                        alt=""
                        style={{
                          margin: "0px 12px",
                          width: "30px",
                          height: "30px",
                        }}
                      />
                      آب مورد نیاز{" "}
                    </td>
                    <td className="text-muted">
                      {changeValue("water", water)}{" "}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <img src={pet} alt="" style={{ margin: "0px 12px" }} />
                      حیوان خانگی{" "}
                    </td>
                    <td className="text-muted">
                      {changeValue("pet", pet_compatible)}{" "}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <img src={bill} alt="" style={{ margin: "0px 12px" }} />
                      میزان رسیدگی{" "}
                    </td>
                    <td className="text-muted">
                      {changeValue("attention", attention_need)}{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {styles.element2 && (
            <div
              className="card mt-3 border-0 tab-pane fade show active"
              id="additional"
            >
              <table className="table">
                {Array.isArray(gardens) && (
                  <tbody>{showAllGarden(gardens)}</tbody>
                )}
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlantGardens;
