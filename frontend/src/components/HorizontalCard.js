import React from "react";
import { Link } from "react-router-dom";

const HorizontalCard = ({info}) => {
    const {image, category} = info;
  return (
    <div className="row">
      <div className="col-lg-3 col-md-6 mt-4 pt-2">
        <div className="card team text-center border-0">
          <div className="position-relative">
            <img
              src={image}
              className="img-fluid avatar avatar-ex-large rounded-circle shadow"
              alt=""
            />
            {/* detail */}
            <div className="icons text-center ">
              <Link
                to="/"
                className="text-primary team-icon bg-white d-inline-block rounded-pill lightbox"
              >
                <i data-feather="camera" className="uil uil-camera "></i>
              </Link>
            </div>
          </div>
          <div className="card-body py-3 px-0 content">
            <h5 className="mb-0">
              <Link to="/" className="name text-dark">
                {category}
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
