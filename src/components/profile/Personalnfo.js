import React from "react";
import { Link } from "react-router-dom";
// Icons
import cityIcon from "../../assets/icons/world.svg";
import phoneIcon from "../../assets/icons/phone.svg";
import emailIcon from "../../assets/icons/email.svg";
import saveIcon from "../../assets/icons/bookmark.svg";

const Personalnfo = ({ info }) => {
  const { email, phone_number, saved } = info;
  return (
    <div className="col-md-6 mt-4">
      <h5>جزئیات شخصی :</h5>
      <div className="mt-4">
        <div className="d-flex align-items-center">
          <img
            src={emailIcon}
            className="fea icon-ex-md text-muted me-3"
            alt=""
            style={{marginBottom: '20px'}}
          />

          <div className="flex-1">
            <h6 className="text-primary mb-0">ایمیل :</h6>
            <p className="text-muted">{email}</p>
          </div>
        </div>
        <div className="d-flex align-items-center mt-3">
          <img
            src={cityIcon}
            className="fea icon-ex-md text-muted me-3"
            alt=""
            style={{marginBottom: '20px'}}
          />

          <div className="flex-1">
            <h6 className="text-primary mb-0">شهر :</h6>
            <p className="text-muted">اصفهان</p>
          </div>
        </div>
        <div className="d-flex align-items-center mt-3">
          <img
            src={phoneIcon}
            className="fea icon-ex-md text-muted me-3"
            alt=""
            style={{marginBottom: '20px'}}
          />

          <div className="flex-1">
            <h6 className="text-primary mb-0">شماره تلفن :</h6>
            <p className="text-muted">{phone_number}</p>
          </div>
        </div>
        <div className="d-flex align-items-center mt-3">
          <img
            src={saveIcon}
            className="fea icon-ex-md text-muted me-3"
            alt=""
            style={{marginBottom: '20px'}}
          />

          <Link>
            <div className="flex-1">
              <h6 className="text-primary mb-0">پسندیده ها :</h6>
              <p className="text-muted">گیاهانی که شما پسندیدید</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Personalnfo;
