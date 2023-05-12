import React from "react";
import photo from "../../assets/photo.png";

const CommentsList = () => {
  return (
    <div style={{ width: "20%" }}>
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={photo}
            alt="image1"
            style={{ width: "45px", height: "45px", marginTop: "10px" }}
          />
          <div style={{ textAlign: "right" }}>
            <p>الهام وهابی</p>
            <p style={{ fontSize: "11px" }}>
              اردیبهشت 1400 - ساعت 14:40 بعدازظهر
            </p>
          </div>
          <span style={{ color: "#32CC8B", fontSize: "20px" }}>
            {" "}
            &#9733; &#9733; &#9733; &#9733; &#9734;
          </span>
        </div>

        <div
          style={{
            backgroundColor: "#E2E2E2",
            padding: "10px",
            boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            borderRadius: "5px",
          }}
        >
          عالی
        </div>
      </div>
      <br /> <br />
      <div>
        <div style={{ display: "flex" }}>
          <img
            src={photo}
            alt="image1"
            style={{ width: "45px", height: "45px", marginTop: "10px" }}
          />
          <div style={{ textAlign: "right" }}>
            <p>الهام وهابی</p>
            <p style={{ fontSize: "11px" }}>
              اردیبهشت 1400 - ساعت 14:40 بعدازظهر
            </p>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#E2E2E2",
            padding: "10px",
            boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            borderRadius: "5px",
          }}
        >
          عالی
        </div>
      </div>
    </div>
  );
};

export default CommentsList;
