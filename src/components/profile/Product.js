import React from "react";
import { Link } from "react-router-dom";
//Icon
import plantIcon from "../../assets/icons/plantProduct.svg";

const Product = ({ info }) => {
    const {image, name, category, id} = info;
  return (

      <div className="col-md-6 mt-4 pt-2">
        <div className="card blog rounded border-0 card-shadow">
          <div className="position-relative">
            <img src={image} className="card-img-top rounded-top" alt="..." />
            <div className="overlay rounded-top bg-dark"></div>
          </div>
          <div className="card-body content">
            <div className="post-meta d-flex justify-content-between mt-3">
              <div></div>
              <Link to="/" className="text-muted readmore">
                جزئیات گل<i className="uil uil-angle-left-b align-middle"></i>
              </Link>
            </div>
          </div>
          <div className="author">
            <img
              src={plantIcon}
              alt=""
              className="text-primary mb-1 d-block"
              style={{ width: "25px" }}
            />

            <small className="text-light user d-block">{name}</small>
            <small style={{ color: "#ffc837eb  " }}>{category}</small>
          </div>
        </div>
      </div>

  
  );
};

export default Product;
