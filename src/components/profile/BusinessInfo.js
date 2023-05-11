import React from "react";
//Icons
import idIcon from "../../assets/icons/idIcon.svg";
import presentIcon from "../../assets/icons/presentation.svg";
import location from '../../assets/icons/location.svg';
import businessMan from '../../assets/icons/business-man.svg';
import phoneIcon from "../../assets/icons/phone.svg";


const Business = ({ info }) => {
  const { business_id, img } = info;
  return (
    <div className="col-md-6 mt-4">
      <h5>اطلاعات کسب و کار :</h5>
      <div className="mt-4">
        <div className="d-flex align-items-center mt-3">
          <img
            src={idIcon}
            className="fea icon-ex-md text-muted me-3"
            alt=""
            style={{ marginBottom: "24px" }}
          />

          <div className="flex-1">
            <h6 className="text-primary mb-0">شناسه کسب و کار :</h6>
            <p className="text-muted">{business_id}</p>
          </div>
        </div>

        <div className="d-flex align-items-center mt-3">
          <img
            src={location}
            className="fea icon-ex-md text-muted me-3"
            alt=""
            style={{ marginBottom: "24px" }}
          />

          <div className="flex-1">
            <h6 className="text-primary mb-0">آدرس :</h6>
            <p className="text-muted">{business_id}</p>
          </div>
        </div>


        <div className="d-flex align-items-center mt-3">
          <img
            src={phoneIcon}
            className="fea icon-ex-md text-muted me-3"
            alt=""
            style={{ marginBottom: "24px" }}
          />

          <div className="flex-1">
            <h6 className="text-primary mb-0"> شماره تلفن گلخانه  :</h6>
            <p className="text-muted">{business_id}</p>
          </div>
        </div>

        <div className="d-flex align-items-center mt-3">
          <img
            src={businessMan}
            className="fea icon-ex-md text-muted me-3"
            alt=""
            style={{ marginBottom: "24px" }}
          />

          <div className="flex-1">
            <h6 className="text-primary mb-0"> مدیر و سرمایه‌گذار اصلی گلخانه  :</h6>
            <p className="text-muted">ملکان</p>
          </div>
        </div>


        <div className="d-flex align-items-center mt-3">
          <div className="flex-1">
            <h6 className="text-primary mb-0">
              <img
                src={presentIcon}
                className="fea icon-ex-md text-muted me-3"
                alt=""
              />
              پروانه کسب :
            </h6>
            <img
              src={img}
              alt=""
              style={{ width: "280px", marginTop: "16px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
