import React from "react";
import { Link } from "react-router-dom";

const HeaderProfile = ({prof_info}) => {
    const {image, name, describe} = prof_info;
  return (
    <>
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
                        src={image}
                        className="avatar avatar-large rounded-circle shadow d-block mx-auto"
                        alt=""
                      />
                    </div>

                    <div className="col-lg-10 col-md-9">
                      <div className="row align-items-end">
                        <div className="col-md-7 text-md-start text-center mt-4 mt-sm-0">
                          <h3 className="title mb-0"> {name}</h3>
                          <small className="text-muted h6 me-2">
                            {describe}
                          </small>
                        </div>
                        <div className="col-md-5 text-md-end text-center">
                          <ul className="list-unstyled social-icon social mb-0 mt-4">
                            <li
                              className="list-inline-item"
                              style={{ marginLeft: "42px" }}
                            >
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
    </>
  );
};

export default HeaderProfile;
