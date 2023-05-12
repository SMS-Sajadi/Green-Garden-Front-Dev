import React from "react";
import "./AddComment.css";

const AddComment = () => {
  return (
    <div style={{ width: "30%", marginRight: "10rem" }}>
      <h2 style={{ textAlign: "right" }}>اضافه کردن نظر:</h2>
      <br />
      <h3 style={{ textAlign: "right" }}>امتیاز شما:</h3>
      <div className="AddCommStarsContainer">
        <p> &#9733; &#9733; &#9733; &#9733; &#9734;</p>
        <p> &#9733; &#9733; &#9733; &#9734; &#9734;</p>
        <p> &#9733; &#9733; &#9734; &#9734; &#9734;</p>
        <p> &#9733; &#9734; &#9734; &#9734; &#9734;</p>
      </div>

      <div style={{ textAlign: "right" }}>
        <p>نظر شما:</p>
        <input
          style={{ height: "5rem", width: "100%" }}
          className="commentInputs"
        />

        <div style={{ display: "flex" }}>
          <div style={{ marginLeft: "5px" }}>
            <p>نام:</p>
            <input className="commentInputs" />
          </div>
          <div>
            <p>ایمیل:</p>
            <input className="commentInputs" />
          </div>
        </div>
      </div>

      <button className="sendBtn">ارسال</button>
    </div>
  );
};

export default AddComment;
