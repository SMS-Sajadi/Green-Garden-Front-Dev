import React from "react";
import { Link } from "react-router-dom";
//image
import logo from "../assets/images/lg.svg";


const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
              <Link to="/home" className="logo-footer">
              <img
                src={logo}
                className="l-light"
                alt="G G loog"
              />
              </Link>
              <p className="mt-4">
                با خیالی آسوده گیاهی که مدت‌هاست دنبال آن می‌گردید را در اینجا
                پیدا کنید.
              </p>
              {/* <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                <li className="list-inline-item">
                  <Link to="#" className="rounded">
                    <i
                      data-feather="facebook"
                      className="fea icon-sm fea-social"
                    ></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="rounded">
                    <i
                      data-feather="instagram"
                      className="fea icon-sm fea-social"
                    ></i>
                  </Link>
                </li>
              </ul> */}
            </div>

            <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <h5 className="text-light footer-head">شرکت </h5>
              <ul className="list-unstyled footer-list mt-4">
                <li>
                  <Link to="/aboutUs" className="text-foot">
                    <i className="uil uil-angle-left-b me-1"></i> درباره ما{" "}
                  </Link>
                </li>
                {/* <li>
                  <Link to="#" className="text-foot">
                    <i className="uil uil-angle-left-b me-1"></i> خدمات{" "}
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-foot">
                    <i className="uil uil-angle-left-b me-1"></i> تیم{" "}
                  </Link>
                </li> */}
                <li>
                  <Link to="/login" className="text-foot">
                    <i className="uil uil-angle-left-b me-1"></i> ورود{" "}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <h5 className="text-light footer-head">خبرنامه </h5>
              <p className="mt-4">
                ثبت نام کنید و آخرین نکات را از طریق ایمیل دریافت کنید.
              </p>
              <form>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="foot-subscribe mb-3">
                      <label className="form-label">
                        ایمیل خود را بنویسید <span className="text-danger">*</span>
                      </label>
                      <div className="form-icon position-relative">
                        <i data-feather="mail" className="fea icon-sm icons"></i>
                        <input
                          type="email"
                          name="email"
                          id="emailsubscribe"
                          className="form-control ps-5 rounded"
                          placeholder="ایمیل شما: "
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="d-grid">
                      <input
                        type="submit"
                        id="submitsubscribe"
                        name="send"
                        className="btn btn-soft-primary"
                        value="خبرنامه"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
