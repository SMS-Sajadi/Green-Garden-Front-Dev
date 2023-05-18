import React, { useState } from "react";
// Icons
import sun from "../../assets/icons/sun2.svg";
import allergy from "../../assets/icons/allergy.svg";
import temp from "../../assets/icons/temp.svg";
import bill from "../../assets/icons/Layer_1 (1).svg";
import pet from "../../assets/icons/pet-svgrepo-com.svg";
import weather from "../../assets/icons/weather.svg";
import water from "../../assets/icons/water.svg";
import fragrance from "../../assets/icons/fragrance.svg";
import eatable from "../../assets/icons/eatable.svg";
import growth from "../../assets/icons/growth.svg";
//image
import garden from "../../assets/images/green garden2.svg";
// Component
import StarScore from "../score/StarScore";

const PlantGardens = ({ info }) => {
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
              className="card border-0 tab-pane fade show active"
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
                    <td className="text-muted">متوسظ</td>
                  </tr>

                  <tr>
                    <td>
                      <img src={temp} alt="" style={{ margin: "0px 12px" }} />
                      دما{" "}
                    </td>
                    <td className="text-muted">پنبه </td>
                  </tr>

                  <tr>
                    <td>
                      <img
                        src={fragrance}
                        alt=""
                        style={{ margin: "0px 12px" }}
                      />
                      عطری{" "}
                    </td>
                    <td className="text-muted">پنبه </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src={eatable}
                        alt=""
                        style={{ margin: "0px 12px" }}
                      />
                      خوراکی{" "}
                    </td>
                    <td className="text-muted">پنبه </td>
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
                    <td className="text-muted">پنبه </td>
                  </tr>

                  <tr>
                    <td>
                      <img
                        src={weather}
                        alt=""
                        style={{
                          margin: "0px 12px",
                          width: "30px",
                          height: "30px",
                        }}
                      />
                      آب و هوا{" "}
                    </td>
                    <td className="text-muted">پنبه </td>
                  </tr>

                  <tr>
                    <td>
                      <img src={growth} alt="" style={{ margin: "0px 12px" }} />
                      مرحله رشد{" "}
                    </td>
                    <td className="text-muted">پنبه </td>
                  </tr>

                  <tr>
                    <td>
                      <img
                        src={water}
                        alt=""
                        style={{
                          margin: "0px 12px",
                          width: "30px",
                          height: "30px",
                        }}
                      />
                      آب مورد نیاز{" "}
                    </td>
                    <td className="text-muted">پنبه </td>
                  </tr>

                  <tr>
                    <td>
                      <img src={pet} alt="" style={{ margin: "0px 12px" }} />
                      حیوان خانگی{" "}
                    </td>
                    <td className="text-muted">پنبه </td>
                  </tr>

                  <tr>
                    <td>
                      <img src={bill} alt="" style={{ margin: "0px 12px" }} />
                      میزان رسیدگی{" "}
                    </td>
                    <td className="text-muted">پنبه </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {styles.element2 && (
            <div
              className="card border-0 tab-pane fade show active"
              id="additional"
            >
              <table className="table">
                <tbody>
                  <tr>
                    <td style={{ width: "180px" }}>
                      <img
                        src={garden}
                        alt=""
                        style={{
                          margin: "0px 12px",
                          width: "30px",
                          height: "30px",
                        }}
                      />
                      گلخانه رز{" "}
                    </td>

                    <td class="list-unstyled mb-0">
                      <div class="tdst-inline-item">
                        <StarScore
                          id={1}
                          outOf={5}
                          onChange={(newRating) => {
                            console.log(newRating);
                          }}
                          class="mdi mdi-star text-warning"
                        />
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <img src={temp} alt="" style={{ margin: "0px 12px" }} />
                      گلخانه سپاهان{" "}
                    </td>

                    <td className="list-unstyled mb-0">
                      <div className="tdst-inline-item">
                        <StarScore
                          id={2}
                          outOf={5}
                          initialRating={2}
                          onChange={(newRating) => {
                            console.log(newRating);
                          }}
                          className="mdi mdi-star text-warning"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlantGardens;
