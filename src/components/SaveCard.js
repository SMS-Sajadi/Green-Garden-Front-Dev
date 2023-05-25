import React from "react";
import { Link } from "react-router-dom";

const SaveCard = ({ info }) => {
  const { image, name, category } = info;

  return (
    <div className="col-lg-3 col-md-6 mt-4 pt-2">
    <div className="card border-0 work-container work-modern position-relative d-block overflow-hidden rounded">
        <div className="portfolio-box-img position-relative overflow-hidden">
            <img className="item-container img-fluid mx-auto" src={image} alt="1" />
            <div className="overlay-work bg-dark"></div>
            <div className="content">
                <h5 className="mb-0"><Link to="/" className="text-white title">{name} </Link></h5>
                <h6 className="text-light tag mb-0"> {category} </h6>
            </div>
            <div className="icons text-center">
                <Link href="images/personal/1.jpg" className="text-primary work-icon bg-white d-inline-block rounded-pill lightbox">
                <i data-feather="camera" className="uil uil-camera "></i>
                    </Link>
            </div>
        </div>
    </div>
</div>
);
};

export default SaveCard;
