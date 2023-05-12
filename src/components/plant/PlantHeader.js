import React from "react";
import { Link } from "react-router-dom";
import greater from "../../assets/icons/go-up.svg";

const PlantHeader = ({name}) => {
  

  return (
    <section className="bg-half d-table w-100   bg-success background">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center">
            <div className="page-next-level">
              <h4 className="title">  
              {name}
              </h4>
              <div className="page-next">
                <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb bg-white rounded shadow mb-0">
                    <li className="breadcrumb-item">
                      <Link to="/home"> گرین گاردن </Link>
                      <img src={greater} alt="" style={{ width: "15px" }} />
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/"> {name} </Link>
                      <img src={greater} alt="" style={{ width: "15px" }} />
                    </li>
                    <li className="breadcrumb-item active">
                      جزئیات گیاه
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantHeader;
