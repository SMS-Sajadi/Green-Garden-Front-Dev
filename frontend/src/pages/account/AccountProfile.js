import React, { useState, useEffect, useRef } from "react";
//images and icons
import avatar from "../../assets/images/avatar-profie.svg";
import sun from "../../assets/icons/sun.svg";
import allergy from "../../assets/icons/allergy.svg";
import temp from "../../assets/icons/temp.svg";
import bill from "../../assets/icons/Layer_1 (1).svg";
import pet from "../../assets/icons/pet-svgrepo-com.svg";
import cityIcon from "../../assets/icons/world.svg";
import phoneIcon from "../../assets/icons/phone.svg";
import emailIcon from "../../assets/icons/email.svg";
import saveIcon from "../../assets/icons/bookmark.svg";
//API
import { postData, getData } from "../../services/api";
import { Link } from "react-router-dom";

const Account_profile = () => {
  const [defaultData, setDefaultData] = useState({});
  const userInfoRef = useRef(null);

  useEffect(() => {
    userInfoRef.current = getData("accounts/");
  }, [userInfoRef]);

  const handleSelectChange = (event) => {
    const name = event.target.name;
    const value = event.target.options[event.target.selectedIndex].text;

    setDefaultData({ ...defaultData, [name]: value });
    console.log(defaultData);
  };

  const saveHandeler = () => {
    postData("accounts/", defaultData);
  };

  return (
    <div className="account">
      {/* <!-- Hero Start --> */}
      <section className="bg-profile d-table w-100 bg-success background">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="card public-profile border-0 rounded shadow"
                style={{ z_index: "1" }}
              >
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-lg-2 col-md-3 text-md-start text-center">
                      <img
                        src={avatar}
                        className="avatar avatar-large rounded-circle shadow d-block mx-auto"
                        alt=""
                      />
                    </div>

                    <div className="col-lg-10 col-md-9">
                      <div className="row align-items-end">
                        <div className="col-md-7 text-md-start text-center mt-4 mt-sm-0">
                          <h3 className="title mb-0"> {userInfoRef.name}</h3>
                          <small className="text-muted h6 me-2">
                            کاربر خوش سلیقه گرین گاردن
                          </small>
                        </div>
                        <div className="col-md-5 text-md-end text-center">
                          <ul className="list-unstyled social-icon social mb-0 mt-4">
                            <li className="list-inline-item"   style={{marginLeft: '42px'}}>
                              <Link
                                to="/home/account/setting"
                                className="rounded"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="تنظیمات"
                              >
                                <i className="uil uil-cog align-middle"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Hero End --> */}

      {/* <!-- Profile Start --> */}
      <section className="section mt-60">
        <div className="container mt-lg-3">
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="border-bottom pb-4">
                <div className="row">
                  <div className="col-md-6 mt-4">
                    <h5>جزئیات شخصی :</h5>
                    <div className="mt-4">
                      <div className="d-flex align-items-center">
                        <img
                          src={emailIcon}
                          className="fea icon-ex-md text-muted me-3"
                          alt=""
                        />
                        <div className="flex-1">
                          <h6 className="text-primary mb-0">ایمیل :</h6>
                          <p className="text-muted">{userInfoRef.email}</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mt-3">
                        <img
                          src={cityIcon}
                          className="fea icon-ex-md text-muted me-3"
                          alt=""
                        />
                        <div className="flex-1">
                          <h6 className="text-primary mb-0">شهر :</h6>
                          <p className="text-muted">اصفهان</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mt-3">
                        <img
                          src={phoneIcon}
                          className="fea icon-ex-md text-muted me-3"
                          alt=""
                        />

                        <div className="flex-1">
                          <h6 className="text-primary mb-0">شماره تلفن :</h6>
                          <p className="text-muted">
                            {userInfoRef.phone_number}
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mt-3">
                        <img
                          src={saveIcon}
                          className="fea icon-ex-md text-muted me-3"
                          alt=""
                        />
                        <Link>
                          <div className="flex-1">
                            <h6 className="text-primary mb-0">پسندیده ها :</h6>
                            <p className="text-muted">
                              گیاهانی که شما پسندیدید
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 mt-4 pt-2 pt-sm-0 info">
                    <h5>اطلاعات محیط :</h5>

                    <div className="d-flex key-feature align-items-center p-3 rounded shadow mt-4">
                      <img src={sun} className="avatar avatar-ex-sm" alt="" />
                      <div className="flex-1 content ms-3">
                        <h4 className="title mb-0"> نور محیط</h4>
                        <select
                          name="light intensity"
                          onChange={handleSelectChange}
                        >
                          <option value="0">زیاد</option>
                          <option value="1">متوسط</option>
                          <option value="3">کم</option>
                        </select>
                      </div>
                    </div>

                    <div className="d-flex key-feature align-items-center p-3 rounded shadow mt-4">
                      <img
                        src={allergy}
                        className="avatar avatar-ex-sm"
                        alt=""
                      />
                      <div className="flex-1 content ms-3">
                        <h4 className="title mb-0"> حساسیت</h4>
                        <select name="allergy" onChange={handleSelectChange}>
                          <option value="false">ندارم</option>
                          <option value="true">دارم</option>
                        </select>
                      </div>
                    </div>

                    <div className="d-flex key-feature align-items-center p-3 rounded shadow mt-4">
                      <img src={temp} className="avatar avatar-ex-sm" alt="" />
                      <div className="flex-1 content ms-3">
                        <h4 className="title mb-0">محیط </h4>
                        <select
                          name="temperature"
                          onChange={handleSelectChange}
                        >
                          <option value="0">گرم و مرطوب</option>
                          <option value="1">گرم و خشک</option>
                          <option value="2">سرد و خشک</option>
                          <option value="3"> متعادل</option>
                        </select>
                      </div>
                    </div>

                    <div className="d-flex key-feature align-items-center p-3 rounded shadow mt-4">
                      <img src={bill} className="avatar avatar-ex-sm" alt="" />
                      <div className="flex-1 content ms-3">
                        <h4 className="title mb-0">وقت رسیدگی </h4>
                        <select
                          name="maintenance"
                          onChange={handleSelectChange}
                        >
                          <option value="0"> هر روز </option>
                          <option value="1"> دوبار در هفته </option>
                          <option value="2"> هفته‌ای یکبار </option>
                          <option value="3"> دوهفته یکبار</option>
                        </select>
                      </div>
                    </div>

                    <div className="d-flex key-feature align-items-center p-3 rounded shadow mt-4">
                      <img src={pet} className="avatar avatar-ex-sm" alt="" />
                      <div className="flex-1 content ms-3">
                        <h4 className="title mb-0"> حیوان خانگی </h4>
                        <select name="pet" onChange={handleSelectChange}>
                          <option value="0"> دارم </option>
                          <option value="1"> ندارم </option>
                        </select>
                      </div>
                    </div>

                    <div className="savebtn">
                      <button
                        className="btn btn-primary"
                        onChange={saveHandeler}
                      >
                        ذخیره
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Profile End --> */}
    </div>
  );
};

export default Account_profile;
