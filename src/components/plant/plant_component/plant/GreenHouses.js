import React from "react";
import image11 from "../../assets/image11.png";

const GreenHouses = () => {
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          backgroundColor: "#fff",
          margin: "1rem 0",
          padding: "1rem",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <img
            src={image11}
            alt="image1"
            style={{ width: "60px", height: "60px", marginLeft: "20px" }}
          />
          <p>سپاهان</p>
        </div>
        <div className="AddCommStarsContainer">
          {" "}
          <p> &#9733; &#9733; &#9733; &#9733; &#9734;</p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          backgroundColor: "#fff",
          margin: "1rem 0",
          padding: "1rem",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <img
            src={image11}
            alt="image1"
            style={{ width: "60px", height: "60px", marginLeft: "20px" }}
          />
          <p>گل یخ</p>
        </div>
        <div className="AddCommStarsContainer">
          <p> &#9733; &#9733; &#9733; &#9734; &#9734;</p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          backgroundColor: "#fff",
          margin: "1rem 0",
          padding: "1rem",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <img
            src={image11}
            alt="image1"
            style={{ width: "60px", height: "60px", marginLeft: "20px" }}
          />
          <p>ابریشم</p>
        </div>
        <div className="AddCommStarsContainer">
          <p> &#9733; &#9733; &#9734; &#9734; &#9734;</p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          backgroundColor: "#fff",
          margin: "1rem 0",
          padding: "1rem",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <img
            src={image11}
            alt="image1"
            style={{ width: "60px", height: "60px", marginLeft: "20px" }}
          />
          <p>گل کده</p>
        </div>
        <div className="AddCommStarsContainer">
          <p> &#9733; &#9734; &#9734; &#9734; &#9734;</p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          backgroundColor: "#fff",
          margin: "1rem 0",
          padding: "1rem",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <img
            src={image11}
            alt="image1"
            style={{ width: "60px", height: "60px", marginLeft: "20px" }}
          />
          <p>پارادایس</p>
        </div>
        <div className="AddCommStarsContainer">
          <p> &#9733; &#9734; &#9734; &#9734; &#9734;</p>
        </div>
      </div>
    </div>
  );
};

export default GreenHouses;
