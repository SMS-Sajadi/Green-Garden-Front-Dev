import React from 'react';
import { Link } from 'react-router-dom';
//Icons
import idIcon from "../../assets/icons/idIcon.svg";
import presentIcon from "../../assets/icons/presentation.svg";
import location from '../../assets/icons/location.svg';
import businessMan from '../../assets/icons/business-man.svg';
import phoneIcon from "../../assets/icons/phone.svg";
//image
import garden from "../../assets/images/plants/14.jpg";




const EditBussinessInfo = () => {
    return (
        <section className="section mt-60" >
        <div className="container mt-lg-3">
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="card border-0 rounded shadow">
                <div className="card-body">
                  <h5 className="text-md-start text-center">جزئیات گلخانه :</h5>

                  <div className="mt-3 text-md-start text-center d-sm-flex">
                    <img
                      src={garden}
                      className="avatar float-md-left avatar-medium rounded-circle shadow me-md-4"
                      alt=""
                    />

                    <div className="
                    mt-md-4 mt-3 mt-sm-0">
                      <Link to="/" className="btn btn-primary mt-2">
                        تغییر تصویر
                      </Link>
                      <Link
                        to="/"
                        className="btn btn-outline-primary mt-2 ms-2"
                      >
                        حذف
                      </Link>
                    </div>
                  </div>

                  <form>
                    <div className="row mt-4">
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
                              name="id"
                              id="first"
                              type="text"
                              className="form-control ps-5"
                              placeholder="شناسه کسب و کار "
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
                              name="number"
                              id="number"
                              type="text"
                              className="form-control ps-5"
                              placeholder="تلفن "
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
                              name="address"
                              id="address"
                              type="text"
                              className="form-control ps-5"
                              placeholder="آدرس شما "
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
                              name="owner"
                              id="owner"
                              type="text"
                              className="form-control ps-5"
                              placeholder=" مدیر اصلی "
                            />
                          </div>
                        </div>
                      </div>


                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">پروانه کسب : </label>
                          <div className="form-icon position-relative">
                            <img
                              src={presentIcon}
                              className="fea icon-sm icons"
                              alt=""
                            />
                            <input
                              name="email"
                              id="email"
                              type="email"
                              className="form-control ps-5"
                              placeholder=" شما :"
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