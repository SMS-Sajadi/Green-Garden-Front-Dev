import React from "react";
import { Link } from "react-router-dom";

// Icon
import chervon from "../assets/icons/chevron-right.svg";

const SaveCard = ({ info }) => {
  const { image, name, category, id } = info;

  const deletePlant = () => {
    
  }

  return (
    <div className="col-lg-3 col-md-6 mt-4 pt-2">
      <div className="card border-0 work-container work-modern position-relative d-block overflow-hidden rounded">
        <div className="portfolio-box-img position-relative overflow-hidden">
          <img
            className="item-container img-fluid mx-auto"
            src={image}
            alt="1"
          />
          <div className="overlay-work bg-dark"></div>
          <div className="content">
            <h5 className="mb-0">
              <Link to="/" className="text-white title">
                {name}{" "}
              </Link>
            </h5>
            <h6 className="text-light tag mb-0"> {category} </h6>
          </div>
          <div className="icons text-center" onClick={deletePlant}>
            <div className="text-primary work-icon bg-white d-inline-block rounded-pill lightbox">
              <i className="uil uil-trash "></i>
            </div>
          </div>
          <div className="read_more bg-primary text-center rounded-circle">
            <Link to={`plant-detail/${id}/`} className="text-light d-block">
              <img src={chervon} alt="" className="fea icon-sm title-dark" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveCard;
