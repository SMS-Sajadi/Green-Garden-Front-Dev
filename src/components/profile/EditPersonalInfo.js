import React from "react";
import { Link } from "react-router-dom";

//images and icons
import avatar from "../../assets/images/avatar-profie.svg";
import userIcon from "../../assets/icons/user-1-svgrepo-com.svg";
import phoneIcon from "../../assets/icons/phone.svg";
import emailIcon from "../../assets/icons/email.svg";
import keyIcon from "../../assets/icons/key.svg";
import commentIcon from "../../assets/icons/comment.svg";

const EditPersonalInfo = () => {
  return (
    <section className="section mt-60">
      <div className="container mt-lg-3">
        <div className="row">
          <div className="col-lg-8 col-12">
            <div className="card border-0 rounded shadow">
              <div className="card-body">
                <h5 className="text-md-start text-center">جزئیات شخصی :</h5>

                <div className="mt-3 text-md-start text-center d-sm-flex">
                  <img
                    src={avatar}
                    className="avatar float-md-left avatar-medium rounded-circle shadow me-md-4"
                    alt=""
                  />

                  <div className="mt-md-4 mt-3 mt-sm-0">
                    <Link to="/" className="btn btn-primary mt-2">
                      تغییر تصویر
                    </Link>
                    <Link to="/" className="btn btn-outline-primary mt-2 ms-2">
                      حذف
                    </Link>
                  </div>
                </div>

                <form>
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">نام </label>
                        <div className="form-icon position-relative">
                          <img
                            src={userIcon}
                            className="fea icon-sm icons"
                            alt=""
                          />
                          <input
                            name="name"
                            id="first"
                            type="text"
                            className="form-control ps-5"
                            placeholder="نام "
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">شماره تلفن :</label>
                        <div className="form-icon position-relative">
                          <img
                            src={phoneIcon}
                            className="fea icon-sm icons"
                            alt=""
                          />
                          <input
                            name="phone_number"
                            id="phone_number"
                            type="text"
                            className="form-control ps-5"
                            placeholder="تلفن "
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">ایمیل </label>
                        <div className="form-icon position-relative">
                          <img
                            src={emailIcon}
                            className="fea icon-sm icons"
                            alt=""
                          />
                          <input
                            name="email"
                            id="email"
                            type="email"
                            className="form-control ps-5"
                            placeholder="ایمیل شما "
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6"></div>

                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">توضیحات </label>
                        <div className="form-icon position-relative">
                          <img
                            src={commentIcon}
                            className="fea icon-sm icons"
                            alt=""
                          />
                          <textarea
                            name="comments"
                            id="comments"
                            rows="4"
                            className="form-control ps-5"
                            placeholder="توضیحات : اگر شرایط خاصی دارید وارد کنید"
                          ></textarea>
                        </div>
                      </div>
                    </div>
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

                <div className="row">
                  <div className="col-md-6 mt-4 pt-2">
                    <h5>تغییر رمز عبور : </h5>
                    <form>
                      <div className="row mt-4">
                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label className="form-label">
                              رمز عبور قدیمی :{" "}
                            </label>
                            <div className="form-icon position-relative">
                              <img
                                src={keyIcon}
                                className="fea icon-sm icons"
                                alt=""
                              />
                              <input
                                type="password"
                                className="form-control ps-5"
                                placeholder="رمز قدیمی"
                                required=""
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label className="form-label">
                              رمز عبور جدید :{" "}
                            </label>
                            <div className="form-icon position-relative">
                              <img
                                src={keyIcon}
                                className="fea icon-sm icons"
                                alt=""
                              />
                              <input
                                type="password"
                                className="form-control ps-5"
                                placeholder="رمز جدید"
                                required=""
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label className="form-label">
                              تایید رمز عبور جدید :{" "}
                            </label>
                            <div className="form-icon position-relative">
                              <img
                                src={keyIcon}
                                className="fea icon-sm icons"
                                alt=""
                              />
                              <input
                                type="password"
                                className="form-control ps-5"
                                placeholder="رمز عبور جدید"
                                required=""
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-12 mt-2 mb-0">
                          <button className="btn btn-primary">
                            ذخیره رمز عبور{" "}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded shadow mt-4">
              <div className="p-4 border-bottom">
                <h5 className="mb-0 text-danger">حذف اکانت :</h5>
              </div>

              <div className="p-4">
                <h6 className="mb-0">
                  آیا می خواهید حساب را حذف کنید؟ لطفاً زیر دکمه "حذف" را فشار
                  دهید
                </h6>
                <div className="mt-4">
                  <button className="btn btn-danger">حذف اکانت</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditPersonalInfo;
