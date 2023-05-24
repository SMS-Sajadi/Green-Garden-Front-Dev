import React from "react";
import { Link } from "react-router-dom";
import error from "../../assets/images/404 Error-pana.svg";

import Navbar from "../../components/Navbar";
const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <section className="bg-home d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12 text-center">
              <img style={{ marginTop: "1.5rem" }} src={error} alt="" />
              <div className="text-capitalize text-dark mb-4 error-page">
                صفحه ای یافت نشد.
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 text-center">
              <Link to="/home" className="btn btn-primary mt-4 ms-2">
                برو صفحه اصلی
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
