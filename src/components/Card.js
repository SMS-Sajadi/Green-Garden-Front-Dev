import React from "react";
import { Link } from "react-router-dom";

const Card = ({ info }) => {
  const { image: main_img, name, category: type } = info;
  return (
    <div className="col-lg-3 col-md-6 col-12 spacing picture-item">
      <div className="card border-0 work-container work-modern position-relative d-block overflow-hidden rounded">
        <div className="card-body p-0">
          <img src={main_img} className="img-fluid" alt="" />
          <div className="overlay-work bg-dark"></div>
          <div className="content">
            <h5 className="mb-0">
              <Link to="/" className="text-white title">
                {name}
              </Link>
            </h5>
            <h6 className="text-light tag mb-0">{type} </h6>
          </div>
          {/* detail */}
          <div className="icons text-center">
            <Link
              to="/"
              className="text-primary work-icon bg-white d-inline-block rounded-pill lightbox"
            >
              <i data-feather="camera" className="uil uil-camera "></i>
              <Link to="/" className="btn btn-icon btn-pills btn-soft-danger"><i data-feather="heart" className="icons"></i></Link>

            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
