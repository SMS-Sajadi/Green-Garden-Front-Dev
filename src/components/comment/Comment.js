import React from "react";
// Component
import StarScore from "../score/StarScore";
import commentIcon from "../../assets/icons/comment.svg";
//API
import { post } from "../../services/api";
import { useState } from "react";
// Icon
import userIcon from "../../assets/icons/user-1-svgrepo-com.svg";


const Comment = ({ garden_id }) => {
  const [commentMessage, setCommentMassage] = useState({
    name: "",
    score: 0,
    message: "",
  });

  // update commentMessage
  const changeHandeler = (event) => {
    setCommentMassage({
      ...commentMessage,
      [event.target.name]: event.target.value,
    });
  };

  // send comment to be saved in database
  const submitHandeler = (event) => {
    event.preventDefault();
    post(`/garden/${garden_id}/`, commentMessage);
  };

  return (
    <div className=" mt-4 pt-2 pt-lg-0" style={{ width: "60%" }}>
      <form className="ms-lg-4" onSubmit={submitHandeler}>
        <div className="row">
          <div className="col-12">
            <h5>اضافه کردن نظر:</h5>
          </div>
          <div className="col-12 mt-4">
            <h6 className="small fw-bold">امتیاز شما :</h6>
            <StarScore
              outOf={5}
              className="mdi mdi-star text-warning"

              // score send into commentMessage
              onChange={(newRating) => {
                setCommentMassage({...commentMessage, score: newRating})
            }}
            />
          </div>

          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">
                نام <span className="text-danger">*</span>
              </label>
              <div className="form-icon position-relative">
                <img src={userIcon} alt="" className="fea icon-sm icons"/>
                <input
                  id="name"
                  name="name"
                  value={commentMessage.name}
                  type="text"
                  placeholder="نام"
                  onChange={changeHandeler}
                  className="form-control ps-5"
                  required=""
                />
              </div>
            </div>
          </div>

          <div className="col-md-12 mt-3">
            <div className="mb-3">
              <label className="form-label">نظر شما:</label>
              <div className="form-icon position-relative">
                <img src={commentIcon} className="fea icon-sm icons" alt="" />
                <textarea
                  id="message"
                  placeholder="کامنت شما"
                  rows="5"
                  name="message"
                  value={commentMessage.message}
                  onChange={changeHandeler}
                  className="form-control ps-5"
                  required=""
                ></textarea>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="send d-grid">
              <button type="submit" className="btn btn-primary">
                ارسال{" "}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Comment;
