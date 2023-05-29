import React from "react";
import { Link } from "react-router-dom";
import { post } from "../../services/api";
//Icons
import idIcon from "../../assets/icons/idIcon.svg";
import location from "../../assets/icons/location.svg";
import businessMan from "../../assets/icons/business-man.svg";
import phoneIcon from "../../assets/icons/phone.svg";
import leaf from "../../assets/icons/garden-holiday-nature-outdoor-plant-summer-svgrepo-com.svg";
import camera from "../../assets/icons/camera-svgrepo-com.svg";
//image
import garden from "../../assets/images/plants/14.jpg";
import { useState } from "react";

const EditBussinessInfo = () => {
  const [avatarImage, setAvatarImage] = useState(garden);
  const [businessImage, setBusinessImage] = useState();

  const [info, setInfo] = useState({
    new_garden_name: "",
    new_phone_number: "",
    new_address: "",
    new_image: "",
    new_business_image: "",
    new_business_code: "",
    new_admin_name: "",
  });

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setAvatarImage(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDeleteAvatar = () => {
    setAvatarImage(garden);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setBusinessImage(event.target.result);
    };
    reader.readAsDataURL(file);
  }

  const submitHandeler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("new_image", avatarImage);

    const formData2 = new FormData();
    formData2.append(" new_business_image", businessImage);

    setInfo({ ...info, new_image: formData, new_business_image: formData2 });
    post("garden/edit/profile/", info);
  };

  const changeHandeler = (event) => {
    setInfo({ ...info, [event.target.name]: event.target.value });
  };

  return (
    <section className="section mt-60">
      <div className="container mt-lg-3">
        <div className="row">
          <div className="col-lg-8 col-12">
            <div className="card border-0 rounded shadow">
              <div className="card-body">
                <h5 className="text-md-start text-center">جزئیات گلخانه :</h5>

                <div className="mt-3 text-md-start text-center d-sm-flex">
                  <img
                    src={avatarImage}
                    className="avatar float-md-left avatar-medium rounded-circle shadow me-md-4"
                    alt=""
                  />

                  <div className="mt-md-4 mt-3 mt-sm-0">
                    <label
                      htmlFor="avatarInput"
                      className="btn btn-primary mt-2"
                    >
                      تغییر تصویر
                      <input
                        id="avatarInput"
                        type="file"
                        accept="image/*"
                        className="d-none"
                        onChange={handleAvatarChange}
                      />
                    </label>
                    <button
                      className="btn btn-outline-primary mt-2 ms-2"
                      onClick={handleDeleteAvatar}
                    >
                      حذف
                    </button>
                  </div>
                </div>

                <form onSubmit={submitHandeler}>
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label"> نام گلخانه :</label>
                        <div className="form-icon position-relative">
                          <img
                            src={leaf}
                            className="fea icon-sm icons"
                            alt=""
                          />
                          <input
                            name="new_garden_name"
                            value={info.new_admin_name}
                            type="text"
                            className="form-control ps-5"
                            placeholder="نام گلخانه "
                            onChange={changeHandeler}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">شناسه کسب و کار :</label>
                        <div className="form-icon position-relative">
                          <img
                            src={idIcon}
                            className="fea icon-sm icons"
                            alt=""
                          />
                          <input
                            name="new_business_code"
                            value={info.new_business_code}
                            type="text"
                            className="form-control ps-5"
                            placeholder="شناسه کسب و کار "
                            onChange={changeHandeler}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label"> تلفن :</label>
                        <div className="form-icon position-relative">
                          <img
                            src={phoneIcon}
                            className="fea icon-sm icons"
                            alt=""
                          />
                          <input
                            name="new_phone_number"
                            value={info.new_phone_number}
                            type="text"
                            className="form-control ps-5"
                            placeholder="تلفن "
                            onChange={changeHandeler}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">آدرس :</label>
                        <div className="form-icon position-relative">
                          <img
                            src={location}
                            className="fea icon-sm icons"
                            alt=""
                          />
                          <input
                            name="new_address"
                            value={info.new_address}
                            id="address"
                            type="text"
                            className="form-control ps-5"
                            placeholder="آدرس شما "
                            onChange={changeHandeler}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">مدیر اصلی : </label>
                        <div className="form-icon position-relative">
                          <img
                            src={businessMan}
                            className="fea icon-sm icons"
                            alt=""
                          />
                          <input
                            name="new_admin_name"
                            value={info.new_admin_name}
                            id="owner"
                            type="text"
                            className="form-control ps-5"
                            placeholder=" مدیر اصلی "
                            onChange={changeHandeler}
                            style={{ height: "41px", fontSize: "14px" }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">پروانه کسب : </label>

                        <div id="suggest">
                          <label
                            htmlFor="imageInput"
                            className="btn btn-primary"
                            style={{height: '40px'}}
                          >
                            <img
                              src={camera}
                              alt=""
                              style={{ height: "25px" }}
                            />
                             بارگذاری عکس
                            <input
                              id="imageInput"
                              type="file"
                              accept="image/*"
                              className="d-none"
                              onChange={handleImageChange}
                            />
                          </label>
                        </div>

                        <div className="mt-3 text-center d-sm-flex b-image" >
                  <img
                    src={businessImage}
                    className="avatar float-md-left avatar-medium rounded-circle shadow me-md-4"
                    alt=""
                  />
                  </div>


                      </div>
                    </div>

                    <div className="col-md-6"></div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <input
                        type="submit"
                        id="submit"
                        name="send"
                        className="btn btn-primary"
                        value="ذخیره تغییرات"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditBussinessInfo;
