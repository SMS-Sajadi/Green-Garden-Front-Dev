import React from "react";
import { useCookies } from "react-cookie";


// Component
import StarScore from "../score/StarScore";
import commentIcon from "../../assets/icons/comment.svg";
//API
import { post, post_pass } from "../../services/api";
import { useState } from "react";
// Icon
import userIcon from "../../assets/icons/user-1-svgrepo-com.svg";


const Comment = ({ garden_id }) => {
  const [cookies, setCookie] = useCookies(["token"]);


  const [commentMessage, setCommentMassage] = useState({
    score: 0,
    comment: "",
  });

  // update commentMessage
  const changeHandler = (event) => {
    setCommentMassage({
      ...commentMessage,
      [event.target.name]: event.target.value,
    });

  };

  // send comment to be saved in database
  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(commentMessage)

    await post_pass(`gardens/${garden_id}/add_score/`, commentMessage, cookies['token']);
  };

  return (
    <div className=" mt-4 pt-2 pt-lg-0" style={{ width: "60%" }}>
      <form className="ms-lg-4" onSubmit={submitHandler}>
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

          <div className="col-md-12 mt-3">
            <div className="mb-3">
              <label className="form-label">نظر شما:</label>
              <div className="form-icon position-relative">
                <img src={commentIcon} className="fea icon-sm icons" alt="" />
                <textarea
                  id="comment"
                  placeholder="کامنت شما"
                  rows="5"
                  name="comment"
                  value={commentMessage.commet}
                  onChange={changeHandler}
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
