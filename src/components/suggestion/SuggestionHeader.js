import React from "react";
import { Link } from "react-router-dom";
import greater from "../../assets/icons/go-up.svg";

const SuggestionHeader = () => {
  return (
    <>
      <section className="bg-half d-table w-100 background-pic" >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">

              <div className="page-next-level">
                <div className="page-next" >
                  <nav aria-label="breadcrumb" className="d-inline-block">
                    <ul className="breadcrumb bg-white rounded shadow mb-0">
                      <li className="breadcrumb-item">
                        <Link to="/home"> گرین گاردن </Link>
                        <img src={greater} alt="" style={{ width: "15px" }} />
                      </li>
                      <li className="breadcrumb-item active">پیشنهاد گیاه</li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="position-relative " style={{ bottom: "75px" }}>
        <div className="shape overflow-hidden text-white">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default SuggestionHeader;
